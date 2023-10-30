import React from 'react'

const Banner = () => {
  return (
    <div className='h-screen'>
        <section className='container mx-auto section mb-9 pt-52'>
          <div className="">
            <div className='xs:w-full md:w-3/5 xl:w-1/2 mx-auto'>
              <div className='text-center'>
                <h1 className='text-5xl font-semibold'>Connecting Creators <i>&</i> Influencers with Brands</h1>
                <p className='text-base'>Unlock endless collaboration opportunities with brands all around the world </p>
              </div>
              <div className='flex justify-center space-x-4 w-full mt-9'>
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-[380px] bg-gray-100 rounded-xl border-none p-4 text-gray-500 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter Your Email"
                  />
                </div>
                <button className='bg-primary text-white rounded-xl px-4 shadow-xl'>Get Started for Free</button>
              </div>
            </div>
          </div>   
        </section>
    </div>
  )
}

export default Banner