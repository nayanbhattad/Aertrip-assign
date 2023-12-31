import React from 'react'
import Navbar from './Navbar'
import FlightSearch from './FlightSearch'

function Header() {
  return (
    <div className='sticky top-0 z-10 mb-2 min-w-[700px]'>
        <Navbar />
        <FlightSearch />
    </div>
  )
}

export default Header
