import React from 'react'
import styles from "./Card.module.scss"
import { Link } from 'react-router-dom'

const Card = ({id=1, pic, title, avatar, name, price, bid, color='grey'}) => {
  return (
    <Link to={`/nft/${id}`}>
    <div className={color=='grey' ? styles.card_black : styles.card}>
        <img src={pic} alt="" />
        <div>
             <div className={styles.auth}>
            <h4>{title}</h4>
            <div>
                <img src={avatar} alt="" />
                <p>{name}</p>
            </div>
            
            </div>
            <div className={styles.money}>
                <div>
                    <p><span>Price</span></p>
                    <p>{price}</p>
                </div> 
                <div>
                    <p><span>Highest Bid</span></p>
                    <p>{bid}</p>
                </div> 
        </div>
        </div>
       
    </div>
    </Link>
    
  )
}

export default Card