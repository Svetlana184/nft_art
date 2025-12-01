import React from 'react'
import styles from "./TopCreators.module.scss"
import {artists} from "../../data.js"
import CardArt from "../CardArt/CardArt.jsx"
import {Link}   from "react-router-dom"
import rocket from '../../assets/btn_icons/RocketLaunchPurple.svg'

const TopCreators = () => {
  const art_cards = artists.map((itm)=> <CardArt key={itm.id} id={itm.id} pic={itm.pic} name={itm.name} price={itm.nft_sold}/>)
  return (
       <section className={styles.top_creators}>
          <div className={styles.top}>
                  <div>
                      <h2>Top creators</h2>
                      <p>Checkout Top Rated Creators on the NFT Marketplace</p>
                  </div>
                  
                  <button>
                    <img src={rocket} alt="" />
                    <Link to="/rankings">View Rankings</Link>
                  </button>
          </div>
          <ul>
            {art_cards}
          </ul>
      </section>
  )
 
}

export default TopCreators