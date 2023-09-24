"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Card = ({item}) => {
  const router = useRouter()
    
  return (
    <div className='px-5 py-5 mt-5  bg-white rounded-lg space-y-2 mx-5 md:mx-5 text-center'>
   <Image src={item.url} alt='doctor' width={400} height={400} className='w-[300px] h-[200px] mx-auto'></Image>
     <p className='font-semibold'>{item.name}</p>
     <hr></hr>
     <p className='text-sm'>{item.speciality} Specialist</p>
     <hr></hr>
     <p className='text-sm'>MBBS,MCS,DMC</p>
     <hr></hr>
     <button className='bg-purple-900 py-2 px-10 text-white rounded-md'
     onClick={()=> router.push("/service")}
     >Make Appointment</button>
        
    </div>
  )
}

export default Card