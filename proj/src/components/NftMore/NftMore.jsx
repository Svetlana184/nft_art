import React from 'react'
import { useParams } from "react-router-dom"
import styles from "./NftMore.module.scss"
import {artists, nfts} from '../../data.js'
import Card from "../Card/Card.jsx"

const NftMore = () => {
  const {id} = useParams();
  const nftt = nfts.find(p=>p.id==id);
  const cards = nfts.map((item) => {
    const artist = artists.find(p => p.id == nftt.author)
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
        <h2>More from this artist</h2>
        <button>
          Go To artist Page
        </button>
      </div>
      <div className={styles.bg}>
        <div className={styles.bot}>{cards}</div>
      </div>
    </section>
    
  )
}

export default NftMore