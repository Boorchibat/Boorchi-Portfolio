import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export const Instagram = () => {
  return (
   <div><Button className='bg-gray-700 hover:bg-gray-300'><Image src="/insta.svg" alt="Instagram" width={24} height={24} /></Button></div>
  )
}
