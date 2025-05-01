import React from 'react'
import NetflixLogo from '../../images/NetflixLogo.png';

const Header = () => {
  return (
   <div className='absolute px-8 py-1 bg-gradient-to-b from-black z-10'>

       <img src={NetflixLogo} alt="Logo" className='w-44'/>
   </div>
    
  )
}

export default Header;