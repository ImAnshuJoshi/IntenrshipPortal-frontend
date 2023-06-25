import React from 'react'
import Nav from '../Components/Nav/Nav'
import SideNav from '../Components/SideNav/SideNav'
import SearchBar from '../Components/SearchBar/SearchBar'
import styles from './Home.module.css'
import CompanyCard from '../Components/CompanyCard/CompanyCard'
import AdCard from '../Components/AdCard/AdCard'

function Home() {
  return (
    <div>
        <div>
        <Nav/>
        </div>
        <div className={styles.SearchContainer}>
            <SideNav/>
            <SearchBar/>
        </div>
        <div className={styles.SearchContainer}>
          <div className={styles.leftNav}>
            <CompanyCard/>
            <AdCard/>
          </div>
            {/* <SearchBar/> */}
        </div>
    </div>
  )
}

export default Home