import React from 'react'
import styles from "./ArtistWorks.module.scss"
import { useParams } from "react-router-dom"
import {artists, nfts} from '../../data.js'
import Card from "../Card/Card.jsx"

const ArtistWorks = () => {
  const {id} = useParams();
  const cards = nfts.map((item) => {
    const artist = artists.find(p => p.id == id)
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
      <div className={styles.create_line}></div>
      <ul>
        <li><button>Created</button></li>
        <li><button>Owned</button></li>
        <li><button>Collection</button></li>
      </ul>
      <div className={styles.bg}>
        <div className={styles.bot}>{cards}</div>
      </div>
    </section>
    
  )
}

export default ArtistWorks