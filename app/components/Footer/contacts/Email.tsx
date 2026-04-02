import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export const Email = () => {
  return (
    <div><Button className='bg-gray-700 hover:bg-gray-300'><Image src="/email.svg" alt="Email" width={24} height={24} /></Button></div>

  )
}
