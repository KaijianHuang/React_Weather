import React from 'react'
import { iconUrlFromCode } from '../services/weatherService'


function Forecast({title, forecast}) {
  return (
    <>
        <div className="flex items-center justify-start mt-6">
            <p className='text-white font-medium uppercase'>{title}</p>
            </div>
            <hr className='my-2' />
            
            <div className='flex flex-row items-center justify-between text-white'>
                {/* {console.log("forecast array: ",forecast[0])} */}
                {forecast.map((forecast) => (
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>
                        {forecast.title}
                    </p>
                    <img src={iconUrlFromCode(forecast.icon)}
                        className='w-12 my-1'
                        alt='' />
                    
                        {forecast.temp && <p className='font-medium'>{forecast.temp.toFixed()}°</p>}
                    
                </div>
                    ))}
                {/* <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>
                        04:30pm
                    </p>
                    <img src='//cdn.weatherapi.com/weather/64x64/night/113.png'
                        className='w-12 my-1'
                        alt='' />
                    <p className='font-medium'>
                                            22
                    </p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>
                        04:30pm
                    </p>
                    <img src='//cdn.weatherapi.com/weather/64x64/night/113.png'
                        className='w-12 my-1'
                        alt='' />
                    <p className='font-medium'>
                                            22
                    </p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>
                        04:30pm
                    </p>
                    <img src='//cdn.weatherapi.com/weather/64x64/night/113.png'
                        className='w-12 my-1'
                        alt='' />
                    <p className='font-medium'>
                                            22
                    </p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>
                        04:30pm
                    </p>
                    <img src='//cdn.weatherapi.com/weather/64x64/night/113.png'
                        className='w-12 my-1'
                        alt='' />
                    <p className='font-medium'>
                                            22
                    </p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>
                        04:30pm
                    </p>
                    <img src='//cdn.weatherapi.com/weather/64x64/night/113.png'
                        className='w-12 my-1'
                        alt='' />
                    <p className='font-medium'>
                                            22
                    </p>
                </div> */}
            </div>
    </>
    )
}

export default Forecast