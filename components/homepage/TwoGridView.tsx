import React from 'react'
import Image from 'next/image'

const TwoGridView = (data:any) => {
  return (
    <section className='mb-9 bg-zinc-100 pt-20'>
        <div className="container mx-auto px-5">
            <div className="flex flex-col lg:flex-row items-center justify-center">
                <div className='w-full lg:w-[483px] mb-8'>
                    <div className=''>
                        <h1 className='text-3xl lg:text-5xl mb-8'>{data.data.header}</h1>
                        <button className='bg-primary hover:bg-[#0F3AD2]  text-white rounded-xl px-8 py-4 shadow-button-shadow'>{data.data.buttonText}</button>

                    </div>
                </div>
                <div className='w-full lg:w-[620px]'>
                    <Image
                        src={data.data.image}
                        alt=""
                        className="object-cover lg:object-contain"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default TwoGridView