import React from 'react'
import styles from "./MagicMushrooms.module.scss"
import {artists, nfts} from '../../data.js'

const MagicMushrooms = () => {
  const artist = artists[6];
  const nft = nfts[13];
  return (
    <section className={styles.mush_sec}>
      <div className={styles.text_mush}>
        <div className={styles.text_auth}>
        <button className={styles.btn_auth}>
          <img src={artist.pic} alt="" />
          <p>{artist.name}</p>
        </button>
        <h3>{nft.title}</h3>
        <button>
          <p>See NFT</p>
        </button>
      </div>
      <div className={styles.time}>
        <p>Auction ends in:</p>
        <ul>
          <h5>59</h5>
          <h5>:</h5>
          <h5>59</h5>
          <h5>:</h5>
          <h5>59</h5>
        </ul>
        <ul>
          <li>Hours</li>
          <li>Minutes</li>
          <li>Seconds</li>
        </ul>
      </div>
      </div>
      <div className={styles.bg}>
           <img  src={nft.pic} alt="" />
           <div className={styles.filter}></div>
      </div>
     
    </section>
  )
}

export default MagicMushrooms