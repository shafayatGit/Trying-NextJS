"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const about = () => {
    const router = useRouter()
    const handleGoAddress=()=>{
        router.push('/about/address')
    }
    return (
        <div>
            <Link href={"/about/address"}>Address</Link>
            <h1>about page</h1>
            <button className='bg-amber-300 p-3 rounded-2xl' onClick={handleGoAddress}>Address</button>
        </div>
    );
};

export default about;