import React from 'react'
import Image from 'next/image'

const TwoGridView = (data:any) => {
  return (
    <section className='section mb-9 bg-zinc-100 pt-20'>
        <div className="container mx-auto">
        <div className="flex items-center justify-center">
            <div className='w-[483px]'>
            <div className=''>
                <h6 className='text-5xl mb-8'>{data.data.header}</h6>
                <button className='bg-primary text-white rounded-xl px-8 py-4 shadow-button-shadow'>{data.data.buttonText}</button>

            </div>
            </div>
            <div className='w-[620px]'>
                <Image
                    src={data.data.image}
                    alt=""
                    className="object-contain"
                />
            </div>
        </div>
        </div>
    </section>
  )
}

export default TwoGridView