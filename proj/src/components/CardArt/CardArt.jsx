import React from 'react'
import styles from './CardArt.module.scss'

const CardArt = ({id, pic, name, price}) => {
  return (
    <div className={styles.card}>
      <div className={styles.idd}>{id}</div>
      <img src={pic} alt="" />
      <h4>{name}</h4>
      <div>
        <p><span>Total Sales:</span></p>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default CardArt