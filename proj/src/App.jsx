import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import TrendCollection from './components/TrendCollectionSection/TrendCollection';
import TopCreators from './components/TopCreatorsSection/TopCreators'
import BrowCat from './components/BrowseCatSection/BrowseCat'
import DiscMore from './components/DiscMoreSection/DiscMore'
import MagicMushrooms from './components/MagicMushroomsSection/MagicMushrooms'
import HowItWorks from './components/HowItWorksSection/HowItWorks'
import Join from './components/JoinSection/Join';
import CreateAcoount from './components/CreateAccountSection/CreateAccount'
import ConnectWallet from './components/ConnectWalletSection/ConnectWallet'
import ArtistProfile from './components/ArtistProfile/ArtistProfile';
import ArtistWorks from './components/ArtistWorks/ArtistWorks';
import NftInfo from './components/NftInfo/NftInfo';
import NftMore from './components/NftMore/NftMore'
import Marketplace from './components/Marketplace/Marketplace';
import RankCreators from './components/RankCreators/RankCreators';


function App() {

  return (
    <>
      
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection/>
              <TrendCollection/>
              <TopCreators/>
              <BrowCat/>
              <DiscMore/>
              <MagicMushrooms/>
              <HowItWorks/>
              <Join/>
            </>
          }/>
          <Route path="/create_account" element={
            <>
              <CreateAcoount/>
            </>
          }/>
          <Route path="/connect_wallet" element={
            <>
              <ConnectWallet/>
            </>
          }/>
         <Route path="/artist/:id" element={
            <>
              <ArtistProfile/>
              <ArtistWorks/>
            </>
          }/>
          <Route path="/nft/:id" element={
            <>
              <NftInfo/>
              <NftMore/>
            </>
          }/>
          <Route path="/marketplace" element={
            <>
              <Marketplace/>
            </>
          }/>
          <Route path="/rankings" element={
            <>
              <RankCreators/>
            </>
          }/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
