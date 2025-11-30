import styles from "./Header.module.scss"
import logo from "../../assets/Logo.svg"
import user from "../../assets/User.svg"
import {Link}   from "react-router-dom"

const Header = () => {
  return (
    <header className={styles.header_nft}>
         <Link to="/"><img src={logo} alt="" /></Link>
        <ul>
            <li><Link to="/marketplace">Marketplace</Link></li>
            <li><Link to="/rankings">Rankings</Link></li>
            <li><Link to="/connect_wallet">Connect a wallet</Link></li>
            <button>
                <img src={user} alt="" />
                <p>Sign Up</p>
            </button>
        </ul>
    </header>
  )
}

export default Header