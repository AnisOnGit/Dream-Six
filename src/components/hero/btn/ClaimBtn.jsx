import { toast } from "react-toastify";


const ClaimBtn = ({handleClaimCoin}) => {
    return (
        <div>
            <button className="
            pl-3
            pr-3
            pt-3
            pb-3
            font-bold
            bg-[#E7FE29]
            border-5
            border-[#131313]
            border-double
            rounded-xl
            hover:cursor-pointer
            "
            onClick={()=>{
                handleClaimCoin();
                toast.success("Coins Successfully Added to Wallet");
                
            }}
            >Claim Free Credit</button>
        </div>
    );
};

export default ClaimBtn;