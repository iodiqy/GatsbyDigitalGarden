# Change Log


All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.6.0](https://github.com/hikerpig/gatsby-project-kb/compare/gatsby-theme-kb@0.5.4-alpha.0...gatsby-theme-kb@0.6.0) (2021-03-05)

Hello Gatsby V3.

# BREAKING

Now works with gatsby@3

# Improvements
* upgrade gatsby-plugin-mdx@2
* fix(gatsby-theme-kb): sidebar expand bug with file in nested folder
* style: a warmer color for light mode default text


## [0.5.4-alpha.0](https://github.com/hikerpig/gatsby-project-kb/compare/gatsby-theme-kb@0.5.3...gatsby-theme-kb@0.5.4-alpha.0) (2021-03-04)

**Note:** Version bump only for package gatsby-theme-kb





## [0.5.3](https://github.com/hikerpig/gatsby-project-kb/compare/gatsby-theme-kb@0.5.2...gatsby-theme-kb@0.5.3) (2021-03-03)


### Bug Fixes

* **gatsby-theme-kb:** the sidebar subdirectory should not collapse when clicking link ([3a97a55](https://github.com/hikerpig/gatsby-project-kb/commit/3a97a55b86df0f2934f311ee6b237dae3ea7b865))





## [0.5.2](https://github.com/hikerpig/gatsby-project-kb/compare/gatsby-theme-kb@0.5.1...gatsby-theme-kb@0.5.2) (2021-02-28)


### Bug Fixes

* **gatsby-theme-kb:** errors when rendering custom components in mdx mentioned in [#6](https://github.com/hikerpig/gatsby-project-kb/issues/6) ([006b87c](https://github.com/hikerpig/gatsby-project-kb/commit/006b87c3372908ae09f73bb9476171dfef279e05))





## [0.5.1](https://github.com/hikerpig/gatsby-project-kb/compare/gatsby-theme-kb@0.5.0...gatsby-theme-kb@0.5.1) (2021-02-26)


### Bug Fixes

* codeblock style ([a837db8](https://github.com/hikerpig/gatsby-project-kb/commit/a837db867f55af6ca4133e1eb1fb2235e543a553))
* **gatsby-theme-kb:** graph view error due to lazy render ([fea20ff](https://github.com/hikerpig/gatsby-project-kb/commit/fea20ffbb4262e36d5adf707159f13c088d8842c))





# [0.5.0](https://github.com/hikerpig/gatsby-project-kb/compare/gatsby-theme-kb@0.4.3...gatsby-theme-kb@0.5.0) (2021-02-20)


### Features

* add search in graph view and make it interactively highlighting result nodes ([0323db9](https://github.com/hikerpig/gatsby-project-kb/commit/0323db9ca8f8169d001b021724ca49714b5f10e4))





## [0.4.3](https://github.com/hikerpig/gatsby-project-kb/compare/gatsby-theme-kb@0.4.2...gatsby-theme-kb@0.4.3) (2021-02-15)


### Bug Fixes

* modify gatsby-plugin-purgecss to make it work in foam-template-gatsby-kb ([eea174a](https://github.com/hikerpig/gatsby-project-kb/commit/eea174afb86a8852e7e70bdfcfe09f0e52cfd700))
* multiple note-graph ini in GraphView when toggling graphState ([51581b7](https://github.com/hikerpig/gatsby-project-kb/commit/51581b7396b2edc00b9cb01a506d726eecc03036))





## [0.4.2](https://github.com/hikerpig/gatsby-project-kb/compare/gatsby-theme-kb@0.4.1...gatsby-theme-kb@0.4.2) (2021-02-14)


### Bug Fixes

* **gatsby-theme-kb:** sidebar treeview with nested folders ([77c6e2f](https://github.com/hikerpig/gatsby-project-kb/commit/77c6e2f4635010cc5db8037d089a04e346bfcc8d))





## [0.4.1](https://github.com/hikerpig/gatsby-project-kb/compare/gatsby-theme-kb@0.4.0...gatsby-theme-kb@0.4.1) (2021-02-14)


### Bug Fixes

* **gatsby-theme-kb:** misfunction in AnchorTag caused by v0.3.0 ([7739b49](https://github.com/hikerpig/gatsby-project-kb/commit/7739b496866eb6573dad0600fa252cd292aa1348))
* backlink should show referrer title and link ([8e89b4d](https://github.com/hikerpig/gatsby-project-kb/commit/8e89b4d22f85a2dc3b0f4902f9530a4692e81161))





# [0.4.0](https://github.com/hikerpig/gatsby-project-kb/compare/gatsby-theme-kb@0.3.0...gatsby-theme-kb@0.4.0) (2021-02-13)


### Features

* **gatsby-theme-kb:** show backlink context, related [#1](https://github.com/hikerpig/gatsby-project-kb/issues/1) ([685b92c](https://github.com/hikerpig/gatsby-project-kb/commit/685b92c3970116cc593581f52ecc6e0b66b0c146))


## 0.3.1 (2021-02-13)

### Features

* **gatsby-theme-kb:** initially collapsed directory node ([cd0aae4](https://github.com/hikerpig/gatsby-project-kb/commit/cd0aae468c7c7755da813615c7a24c81431f53cb))
* optimize search result background in dark mode ([9af3ca3](https://github.com/hikerpig/gatsby-project-kb/commit/9af3ca3aa725f25f83303a17c922db8802c007e6))
* **gatsby-remark-wiki-link:** support `options.stripDefinitionExts ([7999c4c](https://github.com/hikerpig/gatsby-project-kb/commit/7999c4ce2ed89e313a9bd922c4582c3b0e457fdf))
* **gatsby-theme-kb:** `options.getPluginMdx` ([c307ae5](https://github.com/hikerpig/gatsby-project-kb/commit/c307ae530806797cac3974a1bcea480e931d730d))
* add custom package transformer-wiki-references and gatsby-remark-wiki-link ([237c94f](https://github.com/hikerpig/gatsby-project-kb/commit/237c94f06b79f14124fbcebca10979bacf758de5))
* new package gatsby-remark-wiki-link ([f47ea2a](https://github.com/hikerpig/gatsby-project-kb/commit/f47ea2acdd9fecf1d758df610a8e2e7726fcbf07))


### Bug Fixes

* **gatsby-remark-wiki-link:** index error ([8fd4636](https://github.com/hikerpig/gatsby-project-kb/commit/8fd4636654fc9406389c61ba52d602009a3cb700))
