import React from 'react'
import styles from "./HowItWorks.module.scss"
import {how_it_works} from '../../data.js'

const HowItWorks = () => {
  const cards = how_it_works.map((item)=>
  <li key={Math.random}>
    <img src={item.img} alt="" />
    <div>
      <h6>{item.title}</h6>
      <p>{item.desc}</p>
    </div>
  </li>)

  return (
    <section className={styles.how_section}>
      <div>
        <h2>How it works</h2>
        <p>
            Find out how to get started
        </p>
      </div>
      <ul>{cards}</ul>
    </section>
  )
}

export default HowItWorks