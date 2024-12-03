import React from 'react'

const Header = () => {
  return (
    <div className='p-10 flex items-center justify-between'>
        <h1 className='text-2xl font-medium'>Hello<br></br><span className='font-3xl font-semibold'>PARTH 👋🏻</span></h1>
        <button className='bg-orange-600 rounded-sm text-lg font-medium px-5 py-2 text-white'>Log out</button>
    </div>
  )
}

export default Header