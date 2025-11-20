import React from 'react'
import styles from "./Join.module.scss"
import pic from '../../assets/join_pic.png'

const Join = () => {
  return (
    <section className={styles.join_section}>
      <img src={pic} alt="" />
      <div>
        <h4>Join our weekly digest</h4>
        <p>
            Get exclusive promotions & updates straight to your inbox.
        </p>
        <form action=" ">
          <input type="text" />
        </form>
      </div>
    </section>
  )
}

export default Join