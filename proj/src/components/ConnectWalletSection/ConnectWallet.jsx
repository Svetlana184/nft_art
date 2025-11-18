import React from 'react'
import styles from "./ConnectWallet.module.scss"
import wallet from '../../assets/wallet.png'
import coin from '../../assets/Coinbase.png'
import mask from '../../assets/Metamask.svg'
import w from '../../assets/WalletConnect.png'

const ConnectWallet = () => {
  return (
    <section className={styles.collect_wallet}>
          <img src={wallet} alt="" />
          <div className={styles.wallet_text}>
            <h1>Connect wallet</h1>
            <p>
                Choose a wallet you want to connect. There are several wallet providers.
            </p>
            <ul>
                <li>
                  <img src={mask} alt="" />
                  <p>Metamask</p>
                </li>
                <li>
                  <img src={w} alt="" />
                  <p>Wallet Connect</p>
                </li>
                <li>
                  <img src={coin} alt="" />
                  <p>Coinbase</p>
                </li>
            </ul>
          </div>
        </section>
  )
}

export default ConnectWallet