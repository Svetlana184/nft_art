import styles from "./Footer.module.scss"
import logo from "../../assets/Logo.svg"
import ds from "../../assets/footer_ico/DiscordLogo.svg"
import inst from "../../assets/footer_ico/InstagramLogo.svg"
import tw from "../../assets/footer_ico/TwitterLogo.svg"
import yo from "../../assets/footer_ico/YoutubeLogo.svg"
import {Link}   from "react-router-dom"

const Footer = () => {
  return (
    <footer className={styles.footer_nft}>
      <div className={styles.footer_top}>
          <div className={styles.first_column}>
            <Link to="/"><img src={logo} alt="" /></Link>
            <p>NFT marketplace UI created with Anima for Figma.</p>
            <p>Join our community</p>
            <ul>
              <li><img src={ds} alt="" /></li>
              <li><img src={inst} alt="" /></li>
              <li><img src={tw} alt="" /></li>
              <li><img src={yo} alt="" /></li>

            </ul>
          </div>
          <div className={styles.second_column}>
            <h4>Explore</h4>
              <ul>
                <li><Link to="/marketplace">Marketplace</Link></li>
                <li><Link to="/rankings">Rankings</Link></li>
                <li><Link to="/connect_wallet">Connect a wallet</Link></li>
              </ul>
          </div>
          
          <div className={styles.third_column}>
              <h4>Join our weekly digest</h4>
              <p>Get exclusive promotions & updates straight to your inbox.</p>
               <form className={styles.form_sub}>
                      <input type="text" placeholder='  Enter your email here'/>
                      <button>Subscribe</button>
                </form>
          </div>
      </div>
      <div className={styles.create_line}></div>
      <div className={styles.footer_bottom}>
          <p>Ⓒ NFT Market. Use this template freely.</p>
      </div>
    </footer>
  )
}

export default Footer