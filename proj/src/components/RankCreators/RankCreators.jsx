import React, { useState } from 'react'
import styles from "./RankCreators.module.scss"
import {artists} from "../../data.js"
import { Link } from 'react-router-dom'

const RankCreators = () => {
  const [activeElement, setActiveElement] = useState('1')
   const changeAnswer = (index) => {
    setActiveElement(index)
  }
  const artists_ul = artists.map((item)=> 
  <li key={item.id}>
    <div className={styles.info}>
        <div>{item.id}</div>
        <img src={item.pic} alt="" />
        <Link to={`/artist/${item.id}`}>
        <p><b>{item.name}</b></p>
        </Link>
        
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
          <button id='1' onClick={()=>changeAnswer('1')} className={`bt ${'1' == activeElement ? 'active' : ''}`}
          >Today</button>
          <button id='2' onClick={()=>changeAnswer('2')} className={`bt ${'2' == activeElement ? 'active' : ''}`}
          >This Week</button>
          <button id='3' onClick={()=>changeAnswer('3')} className={`bt ${'3' == activeElement ? 'active' : ''}`}
          >This Month</button>
          <button id='4' onClick={()=>changeAnswer('4')} className={`bt ${'4' == activeElement ? 'active' : ''}`}
          >All Time</button>
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