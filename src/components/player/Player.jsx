import { CgProfile } from "react-icons/cg";
import { IoFlagSharp } from "react-icons/io5";
import { toast } from 'react-toastify';

const Player = ({onePlInfo,coin,setCoin,handleSlectedPlayers,slectedPlayers }) => {

    const {image,name,country,type,rating,handed,price} = onePlInfo;
    
    // const notify = () => toast.error('Not Enough Coins in Wallet');
    // const notify2 = () => toast.success('Player Successfully Added');
    // const notify3 = ()=> toast.info('Player Already Selected');

    const handleChoosePlayer = () => {
        let alreadyExists = false;
        for(let i=0; i< slectedPlayers.length; i++){
            if(slectedPlayers[i].name === onePlInfo.name){
                alreadyExists = true;
                toast.info('Player Already Selected');
                // notify3();
                console.log('Player already selected');
                break; // no need to keep checking
            }
        }

        

        if(!alreadyExists && coin >= price){

            if(slectedPlayers.length === 6){
                toast.info("Already Selected 6 players");
            }else {
                // console.log('Coin in Wallet'+coin);
            console.log(name +' is selected');
            const newBal = coin - price;
            setCoin(newBal);
            // console.log('Coin Remaining'+newBal);
            // notify2();
            toast.success('Player Successfully Added');
            handleSlectedPlayers(onePlInfo);
            }

            
        }
        else if(coin < price){
            // notify();
            toast.error('Not Enough Coins in Wallet');
            console.log('Not Enough Coins')
        }
        

    }

    return (
        // PlayerCard
        <div className="border-2 rounded-4xl border-gray-100 w-[424px] h-[528px]">
            
            {/* wrapper */}
            <div className="pl-5 pr-5 pt-6 pb-6">
                
                <img className="rounded-4xl w-[376px] h-[240px] object-cover " src={image} alt={
                    `Pictur of ${name}`
                }/>

                {/* pName */}
                <div className="flex items-center pl-2 pt-5">
                    <CgProfile className="w-[28px] h-[28px]" />
                    <h2 className="pl-3 font-bold text-2xl">{name}</h2>
                </div>

                {/* flag&Country */}
                <div className=" flex justify-between  pt-3 pb-4 border-b-2 border-b-gray-100">
                    
                    <div className="flex pl-2 ">
                        <IoFlagSharp className="w-[20px] h-[20px]"/>
                        <p className="pl-2">{country}</p>
                    </div>
                    
                    <p className="pl-3 pr-3 bg-gray-200 rounded">{type}</p>

                </div>

                {/* Rating */}
                <div className="pl-2 ">
                    
                    <div className="flex pt-2 font-bold justify-between">
                        <p className="">Rating</p>
                        <p>{rating}</p>
                    </div>
                    
                    <div className="flex pt-2 justify-between">
                        <p className="font-bold">Handed</p>
                        <p className="text-gray-500">{handed}</p>
                    </div>
                    
                    
                    {/* Price & Choose */}
                    <div className="flex justify-between pt-2">
                        <p className="font-bold">Price: ${price}</p>
                        
                        <button 
                        onClick={()=>{
                            handleChoosePlayer();
                        }
                        }  
                        className="border-2 border-gray-200 pl-3 pr-3 pt-1 pb-1 rounded-md hover:cursor-pointer" 
                        >Choose Player</button>
                    
                    </div>
                    
                </div>
            </div>
            


        
        </div>
    );
};

export default Player;