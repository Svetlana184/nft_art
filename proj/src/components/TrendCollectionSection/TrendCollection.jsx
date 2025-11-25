import React from 'react'
import styles from "./TrendCollection.module.scss"
import {artists, nfts} from '../../data.js'

const TrendCollection = () => {
  const cards = nfts.slice(0, 3).map((item) => { 
    const artist = artists.find(p => p.id === item.author) 
    return (
      <li id={item.id}>
        <img className={styles.top_pic} src={item.pic} alt="" />
        <div className={styles.bot_pics}>
          <img src={item.pic} alt="" />
          <img src={item.pic} alt="" />
          <div>1025+</div>
        </div>
        <div className={styles.text_pics}>
          <h6>{item.title}</h6>
          <div>
              <img src={artist.pic} alt="" />
              <p>{artist.name}</p>
          </div>
        </div>
      </li>
    )
  })
  return (
    <section className={styles.trend_sec}>
      <div className={styles.trend_title}>
        <h2>Trending Collection</h2>
        <p>Checkout our weekly updated trending collection.</p>
      </div>
      <ul>
          {cards}
      </ul>
    </section>
  )
}

export default TrendCollection