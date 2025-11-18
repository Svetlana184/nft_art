import React from 'react'
import styles from "./CreateAccount.module.scss"
import img from '../../assets/create_acc.png'

const CreateAccount = () => {
  return (
    <section className={styles.create_acc}>
      <img src={img} alt="" />
      <div className={styles.create_acc_text}>
        <h1>Create account</h1>
        <p>
            Welcome! enter your details and start creating, collecting and selling NFTs.
        </p>
        <ul>
            <li>
              <form>
                <input type="text" placeholder='  Username'/>
              </form>
            </li>
            <li>
              <form>
                <input type="text" placeholder='  Email Address'/>
              </form>
            </li>
            <li>
              <form>
                <input type="text" placeholder='  Password'/>
              </form>
            </li>
            <li>
              <form>
                <input type="text" placeholder='  Confirm Password'/>
              </form>
            </li>
        </ul>
        <button>Create account</button>
      </div>
    </section>
  )
}

export default CreateAccount