import React from 'react';

const SubscribeBtn = () => {
    return (
        <div>
            <input className='bg-white rounded-l-lg pt-3 pb-3 pl-6' type="text" placeholder='Enter your email' />
                <button className='
                bg-gradient-to-r    from-amber-400 to-red-300  rounded-r-lg 
                pt-3 
                pb-3 
                pl-4 
                pr-4
                font-bold
                hover:cursor-pointer'>
                Subscribe
                </button>
        </div>
    );
};

export default SubscribeBtn;

// bg-gradient-to-r from-yellow-400 to-orange-500