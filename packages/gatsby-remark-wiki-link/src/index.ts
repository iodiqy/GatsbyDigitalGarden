import visit from 'unist-util-visit'
import { Node } from 'unist'
import { LinkReference, Definition } from 'mdast'
import slugify from 'slugify'
import * as path from 'path'

/**
 * if title is something like `folder1/folder2/name`,
 * will slugify the name, while keeping the folder names
 */
const defaultTitleToURLPath = (title: string) => {
  const segments = title.split('/')
  const slugifiedTitle = slugify(segments.pop() as string)
  return `${segments.join('/')}/${slugifiedTitle}`
}

const processWikiLinks = (
  { markdownAST }: { markdownAST: Node },
  options?: { titleToURLPath?: string; stripBrackets?: boolean, stripDefinitionExts?: string[] }
) => {
  const { stripDefinitionExts } = options
  const titleToURL = options?.titleToURLPath
    ? require(options.titleToURLPath)
    : defaultTitleToURLPath

  const definitions: { [identifier: string]: Definition } = {}

  const getLinkUrl = (node: Definition) => {
    if (typeof node.identifier !== 'string') return
    let linkUrl = node.url
    const definition = definitions[node.identifier]
    if (stripDefinitionExts && definition) {
      const extname = path.extname(definition.url || '')
      const matchedExtname = stripDefinitionExts.find((n) => extname === n)
      if (matchedExtname) {
        linkUrl = linkUrl.slice(0, linkUrl.length - matchedExtname.length)
      }
    }
    return linkUrl
  }

  visit(markdownAST, `definition`, (node: Definition) => {
    if (!node.identifier || typeof node.identifier !== 'string') {
      return
    }
    definitions[node.identifier] = node
  })

  visit(markdownAST, `linkReference`, (node: LinkReference, index, parent) => {
    if (node.referenceType !== 'shortcut') {
      return
    }
    const definition = definitions[node.identifier]
    const linkUrl = definition ? getLinkUrl(definition): null
    if (definition && linkUrl === definition.url) {
      // console.log('already in definition', definitions, node.identifier)
      return
    }

    const siblings = parent.children
    if (!siblings || !Array.isArray(siblings)) {
      return
    }
    const previous = siblings[index - 1]
    const next = siblings[index + 1]

    if (!(previous && next)) {
      return
    }

    const previousValue = previous.value as string
    const nextValue = next.value as string

    if (
      previous.type !== 'text' ||
      previous.value[previousValue.length - 1] !== '[' ||
      next.type !== 'text' ||
      next.value[0] !== ']'
    ) {
      return
    }

    previous.value = previousValue.replace(/\[$/, '')
    next.value = nextValue.replace(/^\]/, '')

    ;(node as any).type = 'link' // cast it to link
    if (definition) {
      node.url = linkUrl
    } else {
      node.url = titleToURL(node.label as string)
    }
    node.title = node.label
    if (!options?.stripBrackets && Array.isArray(node.children)) {
      node.children[0].value = `[[${node.children[0].value}]]`
    }
    delete node.label
    delete node.referenceType
    delete node.identifier
  })
}

export default processWikiLinks
