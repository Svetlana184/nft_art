import React from 'react'
import styles from "./RankCreators.module.scss"
import {artists} from "../../data.js"

const RankCreators = () => {
  const artists_ul = artists.map((item)=> 
  <li key={item.id}>
    <div className={styles.info}>
        <div>{item.id}</div>
        <img src={item.pic} alt="" />
        <p><b>{item.name}</b></p>
    </div>
    <div className={styles.stats}>
        <p><span>{item.change}</span></p>
        <p>{item.nft_sold}</p>
        <p>{item.volume}</p>
    </div>
  </li>
  );
  return (
    <section className={styles.rank_sec}>
      <div className={styles.rank_title}>
        <h2>Top Creators</h2>
        <p>Check out top ranking NFT artists on the NFT Marketplace.</p>
      </div>
      <div className={styles.rank_list}>
        <div className={styles.btns}>
          <button>Today</button>
          <button>This Week</button>
          <button>This Month</button>
          <button>All Time</button>
        </div>
        <ul>
          <li className={styles.li_template}>
            <div className={styles.info}>
              <div>#</div>
              <p><b>Artist</b></p>
            </div>
            <div className={styles.stats}>
              <p>Change</p>
              <p>NFTs Sold</p>
              <p>Volume</p>
            </div>
          </li>
          {artists_ul}
        </ul>
      </div>
    </section>
  )
}

export default RankCreators