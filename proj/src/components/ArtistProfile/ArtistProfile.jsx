import React from 'react'
import styles from "./ArtistProfile.module.scss"
import {artists} from '../../data.js'
import { useParams } from "react-router-dom"
import bg from '../../assets/bg_1.png'
import ds from '../../assets/author_icons/DiscordLogo.svg'
import gl from '../../assets/author_icons/Globe.svg'
import inst from '../../assets/author_icons/InstagramLogo.svg'
import tw from '../../assets/author_icons/TwitterLogo.svg'
import yt from '../../assets/author_icons/YoutubeLogo.svg'
import copy from '../../assets/btn_icons/Copy.svg'
import plus from '../../assets/btn_icons/Plus.svg'


const ArtistProfile = () => {
  const {id} = useParams();
  const artist = artists.find(p=>p.id==id);
  return (
    <section className={styles.art_sec}>
      <img className={styles.bg_pic} src={bg} alt="" />
      <div className={styles.av_pic}>
        <img src={artist.pic} alt="" />
      </div>
      <div className={styles.info_sec}>
        <div className={styles.text_sec}>
          <h4>{artist.name}</h4>
          <ul>
            <li>
              <h6>{artist.volume}</h6>
              <p>Volume</p>
            </li>
            <li>
              <h6>{artist.nft_sold}</h6>
              <p>NFTs Sold</p>
            </li>
            <li>
              <h6>{artist.followers}</h6>
              <p>Followers</p>
            </li>
          </ul>
          <div>
            <p>Bio</p>
            <h6>{artist.bio}</h6>
          </div>
          <div className={styles.links}>
            <p>Links</p>
            <ul>
              <li><img src={ds} alt="" /></li>
              <li><img src={gl} alt="" /></li>
              <li><img src={inst} alt="" /></li>
              <li><img src={tw} alt="" /></li>
              <li><img src={yt} alt="" /></li>
            </ul>
          </div>
        </div>
        <div className={styles.btn_sec}>
          <button className={styles.btn_id}>
            <img src={copy} alt="" />
            <p>{id}</p>
            </button>
          <button className={styles.btn_follow}>
            <img src={plus} alt="" />
            <p>Follow</p>
            </button>
        </div>
      </div>
    </section>
  )
}

export default ArtistProfile