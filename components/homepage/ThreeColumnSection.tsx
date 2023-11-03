import React from 'react';
import Image from 'next/image'
import dots from '@/assets/dots.svg';

const ThreeColumnSection = (data:any) => {

  return (
    <div className="flex flex-col md:flex-row justify-center w-full lg:space-x-[83px] pt-16">
        {
          data.data.map((item:any, index:number) => (
            <div key={index} className='w-full lg:w-[322px] p-2'>
              <div className='mb-8'>
                      <div>
                          <Image
                              src={dots}
                              alt=""
                              className="object-contain"
                          />
                      </div>
                      <div className='pt-4'>
                          <h1 className='text-lg lg:text-xl text-black mb-2 antialiased'>{item.header}</h1>
                          <p className=''>{item.text}</p>
                      </div>
              </div>
            </div>
          ))
        }
      </div>
  )
}

export default ThreeColumnSection