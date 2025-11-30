import React from 'react'
import styles from './CardArt.module.scss'
import { Link } from 'react-router-dom'

const CardArt = ({id, pic, name, price}) => {
  return (
    <Link to={`/artist/${id}`}>
      <div className={styles.card}>
        <div className={styles.idd}>{id}</div>
        <img src={pic} alt="" />
        <h4>{name}</h4>
        <div>
          <p><span>Total Sales:</span></p>
          <p>{price}</p>
        </div>
      </div>
    </Link>
    
  )
}

export default CardArt