import React from 'react';
import Image from 'next/image'
import dots from '@/assets/dots.svg';

const ThreeColumnSection = (data:any) => {

  return (
    <div className="flex justify-center w-full space-x-[83px] pt-16">
        {
          data.data.map((item:any, index:number) => (
            <div key={index} className='w-[322px] p-2'>
              <div className='mb-8'>
                      <div>
                          <Image
                              src={dots}
                              alt=""
                              className="object-contain"
                          />
                      </div>
                      <div className='pt-4'>
                          <h5 className='text-lg font-medium text-black mb-2'>{item.header}</h5>
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