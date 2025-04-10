import gradBg from '../../assets/bg-shadow.png'
import NewsletterBtn from './newsletterBtn/NewsletterBtn';

const Newsletter = () => {
    return (
        
        <div>

            {/* image container */}
            <div className='max-w-7xl max-h-96 flex flex-col items-center mx-auto  aspect-[16/9] w-full rounded-3xl z-10 border-gray-200 border-1'>
                
            <img src={gradBg} alt="" className='z-0 w-full h-full object-cover rounded-3xl bg-white' />

                <div className='absolute z-10 flex flex-col items-center'>
                    {/* Title */}
                    <h1 className=' text-black text-3xl     font-bold pt-30'>Subscribe to our                     Newsletter</h1>

                    {/* Sub */}
                    <p className='pt-5 pb-5'>Get the latest updates and news right in your              inbox!</p>

                    {/* Btn */}
                    <NewsletterBtn></NewsletterBtn>
                </div>
                

            </div>
        </div>

    );
};

export default Newsletter;
