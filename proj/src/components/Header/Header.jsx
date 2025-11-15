import styles from "./Header.module.scss"
import logo from "../../assets/Logo.svg"
import user from "../../assets/User.svg"

const Header = () => {
  return (
    <header className={styles.header_nft}>
        <img src={logo} alt="" />
        <ul>
            <li><a href="">Marketplace</a></li>
            <li><a href="">Rankings</a></li>
            <li><a href="">Connect a wallet</a></li>
            <button>
                <img src={user} alt="" />
                <p>Sign Up</p>
            </button>
        </ul>
    </header>
  )
}

export default Header