import React from 'react';
import Link from 'next/link';

const PageNotFound = () => {
    return (
        <>
            <h1 className='text-7xl text-center mt-52'>Page Not Found</h1>
            <h3 className='text-4xl text-center mt-12'>Go to <Link href="/"><a className='text-blue-700 cursor-pointer'>Home</a></Link></h3>
        </>
    )
}

export default PageNotFound