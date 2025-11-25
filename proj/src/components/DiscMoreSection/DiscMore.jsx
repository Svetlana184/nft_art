import React from 'react'
import styles from "./DiscMore.module.scss"
import {artists, nfts} from '../../data.js'
import Card from "../Card/Card.jsx"

const DiscMore = () => {
  const cards = nfts.slice(0, 3).map((item) => { 
    const artist = artists.find(p => p.id === item.author) 
    return (
      <Card 
        key={item.id}
        pic={item.pic} 
        title={item.title} 
        avatar={artist?.pic} 
        name={artist?.name} 
        price={item.price} 
        bid={item.bid}
      />
    )
  })
  return(
    <section className={styles.nft_more}>
      <div className={styles.top}>
        <div>
            <h2>Discover More NFTs</h2>
            <p>Explore new trending NFTs</p>
        </div>
        
        <button>
          See All
        </button>
      </div>
      <div className={styles.bot}>{cards}</div>
    </section>
    
  )
}

export default DiscMore