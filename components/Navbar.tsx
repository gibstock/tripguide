import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='header flex flex-row items-center justify-between px-10 py-5 shadow-[0_-1px_4px_#E2E2EA]'>
      <div className='logo flex flex-row justify-center items-center space-x-2'>
        <Image 
          src='/Subtract.png' 
          alt='Tripguide Logo'
          width={40}
          height={38}
        />
        <a href="/">TripGuide</a>
      </div>
      <ul className="main-nav flex flex-row items-center space-x-2">
        <li className='font-bold text-[20px_26px]'>
          <Link href=''>
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href=''>
            <Button>Signup</Button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar