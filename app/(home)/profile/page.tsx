import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import React from 'react'

async function ProfilePage() {
  const session = await getServerSession(authOptions)

  console.log(session, "in de profile page")

  if(session?.user) {
    return (
      <div className='w-full h-full bg-[#222] text-white'>

        <h2 className='text-2xl md:text-5xl p-4'>Welcome, <span className='font-bold'>{session?.user.username}</span></h2>
        
        <div className='w-[300px] h-[300px] relative'>
          <Image src="/tenuki2.jpeg" alt='she sweet like candy in my belly' fill  className='rounded-lg shadow-lg'/>
        </div>


        <div className='bg-[#323] p-4 mt-5'>
          
          <h3 className='text-xl md:text-4xl mb-2'>Your Information: </h3>

          <div className='flex items-start flex-col gap-2'>
            <p>Email: <span>{session?.user.email}</span></p>
            <p>MetaAddress: <span className='text-[12px] font-bold'>{session?.user.metaAddress}</span></p>
            <p>Username:  <span>{session?.user.username}</span></p>
          </div>

        </div>



        
      </div>
    )
  }

  return (
    <div className='w-full h-full bg-[#222] text-white flex items-center justify-center capitalize'>
      <h2>Please login to see admin page</h2>
    </div>
  )
}

export default ProfilePage