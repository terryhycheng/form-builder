import Navbar from '@/components/Navbar'
import React from 'react'

const DashbaordLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <Navbar />
        {children}
    </>
  )
}

export default DashbaordLayout
