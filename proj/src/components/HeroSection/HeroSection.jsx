import styles from "./HeroSection.module.scss"
import avatar from "../../assets/Avatar.png"
import hero from "../../assets/Hero_img.png"
import rocket from "../../assets/RocketLaunch.svg"
import {Link}   from "react-router-dom"

const HeroSection = () => {
  return (
    <section className={styles.hero_section}>
        <div className={styles.text_hero}>
            <h1>Discover digital art & Collect NFTs</h1>
            <p>
                NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
            </p>
            <Link to='/create_account'>
                <button>
                    <img src={rocket} alt="" />
                    <p>Get Started</p>
                </button>
            </Link>
            <ul>
                <li>
                    <h6>240k+ </h6>
                    <p>Total Sale</p>
                </li>
                 <li>
                    <h6>100k+</h6>
                    <p>Auctions</p>
                </li>
                 <li>
                    <h6>240k+</h6>
                    <p>Artists</p>
                </li>
            </ul>
        </div>
        <div className={styles.image_hero}>
            <img src={hero} alt="" />
            <div>
                    <p>Space Walking</p>
                    <div className={styles.profile}>
                        <img src={avatar} alt="" />
                        <p>Animakid</p>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection