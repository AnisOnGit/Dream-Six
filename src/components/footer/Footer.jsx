import footImg from '../../assets/logo-footer.png';
import SubscribeBtn from './Subscribe/SubscribeBtn';
// justify-between items-center max-w-7xl mx-auto

const Footer = () => {
    return (
        
        <div className='bg-[#06091A]'>
            {/* ---------------footer image--------------- */}
            <div className="flex items-center justify-center  pt-70 pb-12">
                <img className='w-30' src={footImg} alt="" />
            </div>

            {/* ---------------footer content--------------- */}
            
            {/* content container div */}
            <div className="flex 
            max-w-7xl mx-auto
             pb-10 ">
                
                {/* wrapper div */}
                <div className='flex justify-between w-full'>
                    {/* left col */}
                    <div className=' '>
                        <p style={{ color: '#FFFFFF' }}>About Us</p>
                        <p className="text-white/60 pt-3 text-sm w-50">
                        We are a passionate team dedicated to providing the best services to our customers.
                        </p>
                    </div>

                    {/* mid col */}
                    <div className=''>
                        <p style={{ color: '#FFFFFF' }}>Quick Links</p>
                        <ul className='text-white/60 list-disc pl-4 text-sm pt-3 space-y-3'>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* right col */}
                    <div className=''>
                        <p style={{ color: '#FFFFFF' }}>Subscribe</p>
                        <p className="text-white/60 pt-3 pb-3 text-sm">Subscribe to our newsletter for the latest update</p>
                        <SubscribeBtn/>
                    </div>

                </div>
                
            </div>

            {/* ---------------footer copyright--------------- */}
            <div className='pt-5 pb-5 flex justify-center'>
                <p className="text-white/60">
                &copy;2025 Dream Six All rights reserved.
                </p>
            </div>
            
        </div>
    );
};

export default Footer;