import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Nav.module.css'
import { Link } from 'react-router-dom'

export default function Nav({onSearch}) {
  return (
    <div className={styles.nav}>
      <Link to="/about"> 
        <div>About</div>
      </Link>
      <Link to="/Home"> 
        <div>Home</div>
      </Link>
      <div className={styles.searchBar}>
      <SearchBar onSearch={onSearch}/>
      </div>
    </div>
  )
}
