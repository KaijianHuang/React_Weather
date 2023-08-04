import React from 'react'

function TemperatureAndDetails() {
  return (
    <div>
        <div className='flex items-center justify-center py-6
        text-xl text-cyan-300'>
            <p>Cloudy</p>
        </div>
        <div className='flex flex-row items-center justify-between py-3 text-white'>
            <img 
            src="//cdn.weatherapi.com/weather/64x64/night/113.png"
            alt=""
            className='w-20' />
            <p className='text-2xl'>34</p>
            <div className='flex flex-col space-y-2'>
                <div className='flex font-light text-sm items-center
                    justify-center'></div>
            </div>
        </div>

    </div>
    )
}

export default TemperatureAndDetails