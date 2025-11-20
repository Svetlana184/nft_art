import React from 'react'
import styles from "./BrowseCat.module.scss"
import {categories} from '../../data.js'

const BrowseCat = () => {
    const cards = categories.map((item)=>
      <li key={Math.random}>
        <img src={item.img} alt="" />
        <div>
          <h6>{item.title}</h6>
        </div>
      </li>)
    
      return (
        <section className={styles.cat_section}>
            <h2>Browse Categories</h2>
          <ul>{cards}</ul>
        </section>
        )
}

export default BrowseCat