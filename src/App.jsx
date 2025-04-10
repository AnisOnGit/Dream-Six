import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Hero from './components/hero/Hero.jsx'
import PlayerHeader from './components/playerHeader/PlayerHeader.jsx'
import Players from './components/players/Players.jsx'
import Newsletter from './components/newsletter/Newsletter.jsx'

function App() {

  // state to store coin in wallet
  const [coin,setCoin] = useState(0);

  // state to store player data after choosing
  const [slectedPlayers, setSelectedPlayers] = useState([]);
   
  // state for hide/show selected players
  const [isSelectedVisible, setSelectedVisible] = useState(false);

  const handleSelectedBtn = ()=>{
    setSelectedVisible(true)
  }

  const handleAvailableBtn = ()=>{
    setSelectedVisible(false)
  }

  const handleDelSelectedPl = (id) =>{
    const remSelectedPl = slectedPlayers.filter(slectedPlayers => slectedPlayers.id !== id);
    setSelectedPlayers(remSelectedPl)
  }
  
  // //checking state value instantly after btn gets clicked
  useEffect(() => {
    console.log('value of isSelectedVisible:',isSelectedVisible)
  }, [isSelectedVisible]);


  // claim coin event handler
  const handleClaimCoin = ()=>{
       setCoin(coin + 50000000)
  }

  // event takes slected player data and stores in state
  const handleSlectedPlayers = (selectedInfo)=>{
    let alreadyExists = false;
    for (let i = 0; i < slectedPlayers.length; i++) {
      if (slectedPlayers[i].id === selectedInfo.id) {
        alreadyExists = true;
        console.log('Player already selected');
        break; // no need to keep checking
      }
    }

    if (!alreadyExists) {
      setSelectedPlayers([...slectedPlayers, selectedInfo]);
    } else {
        console.log("Already Selected");
    }

  }

  // //checking state value instantly after player gets selected
  // useEffect(() => {
  //   // console.log('Selected Players Updated:', slectedPlayers);
  // }, [slectedPlayers]);


  return (
    <>
    <Header coin={coin}/>
    <Hero handleClaimCoin={handleClaimCoin}/>

    <PlayerHeader slectedPlayers={slectedPlayers} 
    isSelectedVisible={isSelectedVisible}
    handleSelectedBtn={handleSelectedBtn} 
    handleAvailableBtn={handleAvailableBtn}
    className=" "/>
    
    <ToastContainer autoClose={2000} position='top-center'/>
    
    <Players 
    coin={coin} 
    setCoin={setCoin} 
    handleSlectedPlayers={handleSlectedPlayers} slectedPlayers={slectedPlayers} 
    isSelectedVisible={isSelectedVisible}
    handleDelSelectedPl={handleDelSelectedPl}
    handleAvailableBtn={handleAvailableBtn}
    />
    
    {/* this div is for fixing newsletter issue */}
    <div className={`${isSelectedVisible ?'flex':'hidden'} mt-100`}></div>
    
    <div className='z-10 -m-60'>
      <Newsletter />
    </div>
    
    <Footer/>
    </>
  )
}

export default App
