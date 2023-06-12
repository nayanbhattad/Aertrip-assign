import React from 'react'

import aertripLogo from '../../../assests/images/aertrip-logo.svg'

function Navbar() {
  return (
    <div className='navbar py-1 flex items-center justify-between px-10 bg-gradient-to-r from-[#00A4AA] to-[#00C99A] '>
        <div className='logo w-1/4'>
            <img alt='company logo' src={aertripLogo} height={60} />
        </div>
        <div className='navigation-menu flex items-center gap-16 text-white font-semiBold w-1/2'>
            <div className='bg-[#33DDC3] rounded-full py-2 px-8'><p>FLIGHT</p></div>
            <div><p>HOTEL</p></div>
            <div><p>VISA</p></div>
        </div>
        <div className='login text-white font-semiBold'>
            <p>LOGIN</p>
        </div>
    </div>
  )
}

export default Navbar
