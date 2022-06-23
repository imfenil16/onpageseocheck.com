import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full'>
            {/* <div className='bg-blue-700 w-110% -mr-32 -ml-32 overflow-hidden h-0.5 mt-9 mb-5'></div> */}
            <div className='flex flex-col items-center justify-center text-center'>
                <h5 className='mb-3 mt-7'>Copyright © 2022 Fenil Patel, All rights reserved.</h5>
                <h5 className='mb-3'>Made with 💙 by <b>Fenil Patel</b></h5>
            </div>
        </footer>
    )
}

export default Footer