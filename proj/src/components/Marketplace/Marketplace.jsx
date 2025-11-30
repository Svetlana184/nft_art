import React from 'react'
import styles from "./Marketplace.module.scss"
import {artists, nfts} from '../../data.js'
import Card from "../Card/Card.jsx"

const Marketplace = () => {
  const cards = nfts.map((item) => {
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
        id={item.id}
      />
    )
  })
  return(
    <section className={styles.nft_more}>
      <div className={styles.top}>
         <div className={styles.rank_title}>
                <h2>Browse Marketplace</h2>
                <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
                <form action="">
                  <input type="text" placeholder='      Search your favourite NFTs'/>
                </form>
          </div>
          <div className={styles.btns}>
                    <button>NFTs</button>
                    <button>Collections</button>
          </div>
      </div>
      <div className={styles.bg}>
        <div className={styles.bot}>{cards}</div>
      </div>
    </section>
    
  )
}

export default Marketplace