import React from 'react'
import styles from "./Card.module.scss"

const Card = ({pic, title, avatar, name, price, bid}) => {
  return (
    <div className={styles.card}>
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
  )
}

export default Card