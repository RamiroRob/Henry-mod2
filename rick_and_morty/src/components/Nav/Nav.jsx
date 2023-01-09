import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Nav.module.css'

export default function Nav({onSearch}) {
  return (
    <div className={styles.nav}>
      <div className={styles.searchBar}>
      <SearchBar onSearch={onSearch}/>
      </div>
    </div>
  )
}
