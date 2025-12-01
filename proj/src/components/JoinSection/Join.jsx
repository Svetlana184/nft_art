import React from 'react'
import styles from "./Join.module.scss"
import pic from '../../assets/join_pic.png'
import letter from '../../assets/btn_icons/EnvelopeSimple.svg'

const Join = () => {
  return (
    <section className={styles.join_section}>
      <img src={pic} alt="" />
      <div>
        <h4>Join our weekly digest</h4>
        <p>
            Get exclusive promotions & updates straight to your inbox.
        </p>
         <form className={styles.form_sub}>
            <input type="text" placeholder='  Enter your email here'/>
            <button>
              <img src={letter} alt="" />
              <p>Subscribe</p>
            </button>
        </form>
      </div>
    </section>
  )
}

export default Join