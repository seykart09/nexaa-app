import React from 'react'
import Image from 'next/image';
import rect from '@/assets/rect.png';

const SmallImages = () => {
  return (
    <div className='pt-20 container mx-auto px-5 w-full lg:w-[1260px]'>
        <div className='flex flex-col lg:flex-row lg:space-x-8 items-center'>
            <h1 className='mb-4 lg:mb-0 lg:max-w-[146px] antialiased'>Trusted by world Leading brands</h1>

            <div className="grid grid-cols-4 lg:grid-cols-8 gap-4">
                <div>
                    <Image 
                        src={rect}
                        alt=""
                        className="object-contain"
                        width={105}
                    />
                </div>
                <div>
                    <Image 
                        src={rect}
                        alt=""
                        className="object-contain"
                        width={105}
                    />
                </div>
                <div>
                    <Image 
                        src={rect}
                        alt=""
                        className="object-contain"
                        width={105}
                    />
                </div>
                <div>
                    <Image 
                        src={rect}
                        alt=""
                        className="object-contain"
                        width={105}
                    />
                </div>
                <div>
                    <Image 
                        src={rect}
                        alt=""
                        className="object-contain"
                        width={105}
                    />
                </div>
                <div>
                    <Image 
                        src={rect}
                        alt=""
                        className="object-contain"
                        width={105}
                    />
                </div>
                <div>
                    <Image 
                        src={rect}
                        alt=""
                        className="object-contain"
                        width={105}
                    />
                </div>
                <div>
                    <Image 
                        src={rect}
                        alt=""
                        className="object-contain"
                        width={105}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SmallImages