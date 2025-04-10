
const PlayerHeader = ({slectedPlayers ,handleSelectedBtn,handleAvailableBtn, isSelectedVisible}) => {

    // console.log('player data to header :'+ slectedPlayers.length);

    return (                 
        <div className="flex justify-between items-center max-w-7xl mx-auto pt-25 pb-7.5">

{/* {`${isSelectedVisible && 'hideSelectedComponent'}text-3xl font-bold} */}
            <h1 className={ `${isSelectedVisible && 'hidden'} flex text-3xl font-bold ` }>Available Players</h1>

            {/* <h1 className="text-3xl font-bold">Available Players</h1> */}

            <h1 className={`${isSelectedVisible ?'flex':'hidden'} text-3xl font-bold`}>Selected Players({slectedPlayers.length}/6)</h1>
            
            <div className="border-1 border-gray-200 rounded-2xl    ">
                
                <button className="rounded-l-2xl  pt-3 pb-3 pl-5 pr-2 hover:cursor-pointer
                font-bold
                hover:bg-[#E7FE29] "
                onClick={handleAvailableBtn}
                >Available</button>
                
                <button className="rounded-r-2xl pt-3 pb-3 pr-5 pl-2
                hover:cursor-pointer
                 font-bold
                hover:bg-[#E7FE29] 
                " onClick={handleSelectedBtn}
                >Selected({slectedPlayers.length})</button>
            
            </div>

        </div>
    );
};

export default PlayerHeader;


// state value changes correctly need to figure out css change