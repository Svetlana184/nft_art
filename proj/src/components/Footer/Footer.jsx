import styles from "./Footer.module.scss"
import logo from "../../assets/Logo.svg"

const Footer = () => {
  return (
    <footer>
      <div>
          <div>
            <img src={logo} alt="" />
            <p>NFT marketplace UI created with Anima for Figma.</p>
            <p>Join our community</p>
            <ul>
              <li><img src="" alt="" /></li>
              <li><img src="" alt="" /></li>
              <li><img src="" alt="" /></li>
              <li><img src="" alt="" /></li>

            </ul>
          </div>
          <ul>
            <li><h6>Explore</h6></li>
            <li><a href="">Marketplace</a></li>
            <li><a href="">Rankings</a></li>
            <li><a href="">Connect a wallet </a></li>
          </ul>
      </div>
      <div className={styles.create_line}></div>
      <p>Ⓒ NFT Market. Use this template freely.</p>
    </footer>
  )
}

export default Footer