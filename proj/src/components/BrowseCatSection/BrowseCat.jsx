import React from 'react'
import styles from "./BrowseCat.module.scss"
import {categories} from '../../data.js'

const BrowseCat = () => {
    const cards = categories.map((item)=>
      <li key={Math.random}>
        <div>
            <img src={item.img} className={styles.bg_pic} alt="" />
            <img src={item.icon} className={styles.icon_pic} alt="" />
        </div>

          <h6>{item.title}</h6>
      </li>)
    
      return (
        <section className={styles.cat_section}>
            <h2>Browse Categories</h2>
          <ul>{cards}</ul>
        </section>
        )
}

export default BrowseCat