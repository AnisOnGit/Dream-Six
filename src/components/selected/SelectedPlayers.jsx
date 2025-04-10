import { FaTrash } from "react-icons/fa";
import "./hideShow.css"

const SelectedPlayers = ({StoredOnePlInfo, isSelectedVisible, handleDelSelectedPl}) => {
    
    const {id,image, name, type}= StoredOnePlInfo
    
    return (
        
        <div className={`${isSelectedVisible && 'showSelectedComponent'}  hidden items-center rounded-2xl border-b-2 border-b-gray-300 max-w-7xl mx-auto justify-between mb-4 pt-5 pb-5 pl-5 pr-5`}> 

            <div className="flex items-center">
                <img src={image} alt="" className=" rounded-3xl w-[80px] h-[80px] object-cover" />
            
                <div className="pl-5">
                    <p className="font-bold text-xl">{name}</p>
                    <p className="text-sm">{type}</p>
                </div>
            </div>
              
            <FaTrash className="w-[30px] h-[30px] hover:cursor-pointer"
            onClick={()=>handleDelSelectedPl(id)}
            />
            
        </div>
    );
};

export default SelectedPlayers;

