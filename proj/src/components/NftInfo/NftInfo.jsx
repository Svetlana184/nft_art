import React from 'react'
import styles from "./NftInfo.module.scss"
import { useParams } from "react-router-dom"
import {artists, nfts} from '../../data.js'

const NftInfo = () => {
  const {id} = useParams();
  const nft = nfts.find(p=>p.id==id);
  const artist = artists.find(p=>p.id==nft.author);
  const tags = nft.tags.map((item)=><li>{item}</li>)
  return (
    <section className={styles.nft_sec}>
      <img className={styles.nft_bg} src={nft.pic} alt="" />
      <div className={styles.nft_text}>
        <div className={styles.left}>
          <div>
            <h4>{nft.title}</h4>
            <p><span>{nft.date}</span></p>
          </div>
          <div>
              <p><span>Created By</span></p>
              <div className={styles.auth}>
                <img src={artist.pic} alt="" />
                <p>{artist.name}</p>
              </div>
          </div>
          <div>
            <p><span>Description</span></p>
            <p>{nft.description}</p>
          </div>
          <div>
            <p><span>Details</span></p>
            <p>View on Etherscan</p>
            <p>View Original</p>
          </div>
          <div>
            <p><span>Tags</span></p>
            <ul>
              {tags}
            </ul>
          </div>
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
          <button>
            Place Bid
          </button>
        </div>
      </div>
    </section>
  )
}

export default NftInfo