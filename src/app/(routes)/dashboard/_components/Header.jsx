import { UserButton } from '@clerk/nextjs'
import React from 'react'

function DashboardHeader() {
  return (
    <div className='p-5 shadow-sm border-b flex justify-between'>
        <div>
          Image
        </div>
        <div>
            <UserButton afterSwitchSessionUrl='/'/>
        </div>
       
    </div>
  )
}

export default DashboardHeader