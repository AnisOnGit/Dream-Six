
const NewsletterBtn = () => {
    
    
    return (
        <div>
            <input className='bg-white rounded-lg pt-3 pb-3 pl-6 pr-40 border-1 border-gray-200' type="text" placeholder='Enter your email' />

            <button className='
                bg-gradient-to-r    from-amber-400 to-red-300  rounded-lg 
                pt-3 
                pb-3 
                pl-4 
                pr-4
                ml-5
                font-bold
                hover:cursor-pointer'>
                Subscribe
            </button>
        </div>
    );
};

export default NewsletterBtn;