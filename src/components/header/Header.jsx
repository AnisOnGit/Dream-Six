
import siteLogo from '../../assets/logo.png';
import { BsCoin } from "react-icons/bs";
import { IconContext } from "react-icons";

const Header = ({coin}) => {
    
    
    
    return (
        
        <div className="flex h-20 justify-between items-center max-w-7xl mx-auto
         ">
            <div className=" md:w-2/4">
                <img src={siteLogo} alt="" />
            </div>
            <div className="flex w-1/4 justify-evenly ">
                <h3>Home</h3>
                <h3>Fixture</h3>
                <h3>Teams</h3>
                <h3>Schedules</h3>
            </div>
            <div className="1/4 flex items-center border-1 border-gray-300 rounded-xl p-2">
                <p className='pr-2'>
                    {coin} Coins
                </p>

                
                <IconContext.Provider value={{ color: "gold", className: "global-class-name" }}>
                <div>
                    <BsCoin/>
                </div>
                </IconContext.Provider>
                
                
                
                
            </div>
            
        </div>
    );
};

export default Header;