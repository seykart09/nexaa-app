import React from 'react'
import Image from 'next/image';
import rect from '@/assets/rect.png';

const SmallImages = () => {
  return (
    <div className='py-32 container mx-auto w-[1260px]'>
        <div className='flex space-x-8 items-center'>
            <h1 className='font-medium'>Trusted by world <br /> Leading brands</h1>
            <div className='flex items-center space-x-3'>
                <Image 
                    src={rect}
                    alt=""
                    className="object-contain"
                    width={105}
                />
                <Image 
                    src={rect}
                    alt=""
                    className="object-contain"
                    width={105}
                />
                <Image 
                    src={rect}
                    alt=""
                    className="object-contain"
                    width={105}
                />
            </div>
        </div>
    </div>
  )
}

export default SmallImages