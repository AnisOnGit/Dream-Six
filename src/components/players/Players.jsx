import Player from "../player/Player";
import { useState } from "react";
import { useEffect } from "react";
import SelectedPlayers from "../selected/SelectedPlayers";
import '../selected/hideShow.css'

const Players = ({coin, setCoin, handleSlectedPlayers, slectedPlayers, isSelectedVisible,handleDelSelectedPl, handleAvailableBtn}) => {

    // state to store ALL player data for loop use
    const [plInfo, setplInfo] = useState([]);
    
    useEffect( ()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setplInfo(data))
    },[]); 

    return (
        <div >
           
            {
                slectedPlayers.map((StoredOnePlInfo,idx) => <SelectedPlayers key={idx} StoredOnePlInfo={StoredOnePlInfo}
                isSelectedVisible={isSelectedVisible}
                handleDelSelectedPl={handleDelSelectedPl}
                />)
            }
            {/* "max-w-7xl mx-auto bg-amber-300 flex" */}
            <div className={`${isSelectedVisible ?'flex':'hidden'} max-w-7xl mx-auto `}>
                <button
                onClick={handleAvailableBtn}
                className="
                hover:cursor-pointer 
                pl-4
                pr-4
                pt-4
                pb-4
                font-bold
              bg-[#E7FE29]
                rounded-xl
                ">Add More Players</button>
            </div>
        
            <div className={`${isSelectedVisible && 'hideSelectedComponent'} flex flex-wrap gap-x-1 gap-y-6 max-w-7xl mx-auto pb-100`}>

            { 
                plInfo.map((onePlInfo,idx) => <Player
                key={idx} 
                onePlInfo ={onePlInfo} 
                coin={coin} 
                setCoin={setCoin}
                handleSlectedPlayers={handleSlectedPlayers}
                slectedPlayers={slectedPlayers}  
                >
                </Player> )
             }
            </div>
            
        </div>
    );
};

export default Players;