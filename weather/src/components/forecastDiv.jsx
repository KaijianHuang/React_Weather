import React from 'react'
import { iconUrlFromCode } from '../services/weatherService'


function forecastDiv({forecast}){
    console.log("forecast array in div:", forecast);
    return(
        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>
                {forecast.title}
            </p>
            <img src={iconUrlFromCode(forecast.icon)}
                className='w-12 my-1'
                alt='' />
            <p className='font-medium'>
                                    {forecast.temp && `${forecast.temp.toFixed()}°`}
            </p>
        </div>
    )
}

export default forecastDiv