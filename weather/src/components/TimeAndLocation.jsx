import React from 'react'

function TimeAndLocation() {
  return (
    <>
    <div className='flex items-center justify-center my-4'>
        <p className='text-white text-xl font-extralight'>
            day, month, year
        </p>
    </div>
    <div className='flex items-center justify-center my-3'>
        <p className='text-white text-3xl font-medium'>
            12:00am - 12:00pm
        </p>
    </div>
    </>
    );
}

export default TimeAndLocation