import React, { useState, useCallback, useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { navigate } from 'gatsby'
import Downshift from 'downshift'
import useSearch from '../../use-search'

import './search.css'

export default function Search() {
  const [query, setQuery] = useState('')
  const searchBarRef = useRef<HTMLDivElement>(null)

  const results = useSearch(query)

  const handleChange = useCallback((e) => setQuery(e.target.value), [setQuery])

  return (
    <Downshift
      onChange={(selection) => navigate(selection.path)}
      itemToString={(item) => (item ? item.title : '')}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        highlightedIndex,
        getRootProps,
      }) => {
        return<div
          className="searchWrapper"
          {...getRootProps({} as any, { suppressRefError: true })}
        >
          <SearchBar
            onChange={handleChange}
            getInputProps={getInputProps}
            ref={searchBarRef}
          />
          {isOpen && (
            <Results
              getMenuProps={getMenuProps}
              getItemProps={getItemProps}
              results={results}
              highlightedIndex={highlightedIndex}
              searchBarRef={searchBarRef}
            />
          )}
        </div>
      }}
    </Downshift>
  )
}

const SearchBar = React.forwardRef<any>((props, ref) => {
  // const SearchBar = ((props, ref) => {
  const { onChange, getInputProps } = props as any
  return (
    <div className="inputWrapper" ref={ref}>
      <svg
        className="searchIcon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782z" />
      </svg>
      <input
        {...getInputProps({
          placeholder: 'Search...',
          onChange: onChange,
        })}
        type="text"
      />
    </div>
  )
}) as any

function Results({
  results,
  getItemProps,
  getMenuProps,
  highlightedIndex,
  searchBarRef,
}) {
  const sRef: React.RefObject<HTMLDivElement> = searchBarRef
  const styles: React.CSSProperties = sRef.current
    ? (function() {
      const searchBarBox = sRef.current.getBoundingClientRect()
      return {
        top: searchBarBox.top + searchBarBox.height + 10,
        right: 20,
      }
    })()
    : {}
  return ReactDOM.createPortal(
    <ul className="results" {...getMenuProps()} style={styles}>
      {results.map((r, index) => (
        <li
          key={r.id}
          {...getItemProps({
            index,
            item: r,
            style: {
              background:
                highlightedIndex === index
                  ? 'var(--kb-references-bg)'
                  : 'var(--kb-note-bg)',
            },
          })}
        >
          <div className="title">{r.title}</div>
          <div className="excerpt">{r.excerpt}</div>
        </li>
      ))}
    </ul>,
    document.body
  )
}
