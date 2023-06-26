import React from 'react'
import styles from './Filter.module.css'
import closesquare from '../../assets/icons/closesquare.png'
import TagComponent from '../TagComponent/TagComponent'
import {CategoryTags , Location, Skills} from '../../assets/data'
import RadioComponent from '../RadioComponent/RadioComponent'
import Slider from '../Slider/Slider'
import FilterFooter from '../FilterFooter/FilterFooter'

const categoryProps = {
  heading: 'Category'  ,
  list : CategoryTags
}
const skillsProps = {
  heading: 'Skills'  ,
  list : Skills
}
const locationProps = {
  heading: 'Location'  ,
  list:Location
}
const radioTimings = {
  heading: 'Timings'  ,
  list:['Full Time' , 'Part Time']
}
const radioWorkFromType = {
  heading: 'Type'  ,
  list:['Work From Office' , 'Work From Home']
}
function Filter({handleClick , handleFilterBtn}) {
  return (
    <div className={styles.filterContainer}>
        <div className={styles.filterHeading}>
          <div className={styles.modalHeader}>
            Filters
          </div>
            <img src={closesquare} onClick={handleClick}/>
        </div>
        <div className={styles.ComponentOne}>
            <TagComponent data={categoryProps}/>
            <TagComponent data={skillsProps}/>
        </div>
        <div className={styles.filterHeading}>
          <RadioComponent data={radioTimings}/>
          <RadioComponent data={radioWorkFromType}/>
        </div>
        <div className={styles.filterHeading}>
          <Slider/>
        </div>
        <TagComponent data={locationProps}/>
        <FilterFooter handleFilterBtn={handleFilterBtn} handleClick={handleClick}/>
    </div>
  )
}

export default Filter