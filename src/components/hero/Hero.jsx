import banner from '../../assets/banner-main.png';
import ClaimBtn from './btn/ClaimBtn.jsx';
import bannerGradiPic from '../../assets/bg-shadow.png'

const Hero = ({handleClaimCoin}) => {
    return (
        <div>                 
            <div className="pt-5 relative flex justify-center  max-w-7xl mx-auto">

                <img className='bg-[#131313]
                rounded-4xl
                z-0
                ' 
                src={bannerGradiPic} alt="" />
                
                {/* wrapper */}
                <div className='flex flex-col items-center absolute z-1'>
                    
                    <img className='pt-15' src={banner} alt="" />
                
                    <h1 className='text-white  font-bold text-4xl pt-10'>Assemble Your Ultimate   Dream 6 Cricket Team</h1>
                        
                    <p className='text-[rgba(255,255,255,0.6)] text-2xl pt-8 pb-5'>Beyond Boundaries Beyound     Limits</p>
                        
                    <ClaimBtn handleClaimCoin={handleClaimCoin}/> 
                </div>
                
            
            </div>
        </div>
    );
};

export default Hero;