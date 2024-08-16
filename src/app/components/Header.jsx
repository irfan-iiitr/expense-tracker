'use client'

import React from 'react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'

import { useUser, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

export default function Header() {
    const { user, isSignedIn } = useUser();
    console.log(user, isSignedIn);
    return (
        <div className='p-5 flex  justify-between  items-center border shadow-sm '>
            <div className='fx flex-row items-center'>
                {/* Logo */}
                {/* <Image src={'/img-Link'}></Image> */}
                <span className='text-black font-bold text-xl'>Finance Planner</span>
            </div>
          
           <div className="flex gap-3  items-center">
           {isSignedIn&& <UserButton></UserButton>}
           
           <Link href={"/dashboard"}>
             <Button variant="outline">
               Dashboard
             </Button>
           </Link>
           <Link href={"/sign-in"}>
             <Button >Get Started</Button>
           </Link>
         </div>
           
        </div>
    );
}