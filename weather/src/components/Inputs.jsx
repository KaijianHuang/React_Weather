import React from 'react'
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
function Inputs() {
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input
                type="text"
                placeholder='Search for city...'
                className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize'
                />
            <UilSearch 
                size={25} 
                className="text-white cursor-pointer transition duration-500 ease-in-out hover:scale-125" 
                />
            <UilLocationPoint 
                size={25} 
                className="text-white cursor-pointer transition duration-500 ease-in-out hover:scale-125" 
                />
        </div>

            <div className='flex flex-row w-1/4 items-center justify-center'>
                <button name="metric" className='text-xl text-white font-light transition ease-in-out duration-500 hover:text-zinc-500 hover:scale-120'>°C</button>
                <p className='text-xl text-white mx-1'>|</p>
                <button name="imperial" className='text-xl text-white font-light transition ease-in-out duration-500 hover:text-zinc-500 hover:scale-120'>°F</button>
            </div>


    </div>
  );
}

export default Inputs