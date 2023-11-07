import React from 'react'
import SliderView from '../shared/BannerSliderView'
import Man1 from '@/assets/man-1.jpeg';
import Man2 from '@/assets/man-2.jpeg';
import Man3 from '@/assets/man-3.jpeg';
import Man4 from '@/assets/man-4.jpeg';
import Woman from '@/assets/woman.jpeg';
import { IoCheckmark } from "react-icons/io5";

const Banner = () => {
    const content = [
      {
        "image":Man1,
        "name":"Seyram Kartey",
        "followers":"42k",
        "tags":["Travel", "Food", "Explore"]
      },
      {
        "image":Man2,
        "name":"ZippyDray",
        "followers":"200",
        "tags":["Travel", "Food", "Explore"]
      },
      {
        "image":Man3,
        "name":"ZippyDray",
        "followers":"5k",
        "tags":["Travel", "Food", "Explore"]
      },
      {
        "image":Man4,
        "name":"ZippyDray",
        "followers":"5k",
        "tags":["Travel", "Food", "Explore"]
      },
      {
        "image":Woman,
        "name":"ZippyDray",
        "followers":"5k",
        "tags":["Travel", "Food", "Explore"]
      },
      {
        "image":Man1,
        "name":"ZippyDray",
        "followers":"42k",
        "tags":["Travel", "Food", "Explore"]
      },
      {
        "image":Man2,
        "name":"ZippyDray",
        "followers":"200",
        "tags":["Travel", "Food", "Explore"]
      },
      {
        "image":Man3,
        "name":"ZippyDray",
        "followers":"5k",
        "tags":["Travel", "Food", "Explore"]
      },
      {
        "image":Man4,
        "name":"ZippyDray",
        "followers":"5k",
        "tags":["Travel", "Food", "Explore"]
      },
      {
        "image":Woman,
        "name":"ZippyDray",
        "followers":"5k",
        "tags":["Travel", "Food", "Explore"]
      },
      {
        "image":Man3,
        "name":"ZippyDray",
        "followers":"5k",
        "tags":["Travel", "Food", "Explore"]
      },
      {
        "image":Man4,
        "name":"ZippyDray",
        "followers":"5k",
        "tags":["Travel", "Food", "Explore"]
      },
      {
        "image":Woman,
        "name":"ZippyDray",
        "followers":"5k",
        "tags":["Travel", "Food", "Explore"]
      },
  ];

  return (
    <div className='h-screen'>
        <section className='pt-32 lg:pt-40 h-full flex flex-col justify-around'>
          <div className="container mx-auto px-5 md:px-4 lg:px-0">
            <div className='w-full md:w-3/5 lg:w-[646px] mx-auto'>
              <div className='text-center'>
                <h1 className='text-2xl lg:text-5xl antialiased '>Connecting Creators <i>&</i> Influencers with Brands</h1>
                <p className='text-base px-2 md:px-16 lg:px-10'>Unlock endless collaboration opportunities with brands all around the world </p>
              </div>
              <div className=''>
                <div className='flex flex-col lg:flex-row justify-center lg:space-x-4 w-full mt-9'>
                  <div className="relative rounded-md shadow-sm">
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="block w-full lg:w-[380px] bg-[#F0F0F0] rounded-xl border-none p-4 text-gray-500  placeholder:text-gray-400  sm:text-sm sm:leading-6 z-1 focus:border-[#214ADC] hover:border-[#214ADC]"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <button className='w-full md:w-auto py-4 bg-primary hover:bg-[#0F3AD2] text-white rounded-xl md:px-4 shadow-xl mt-5 lg:mt-0'>Get Started for Free</button>
                </div>
                <div className="flex flex-wrap gap-4 mt-4 lg:ps-8">
                  <div className='flex gap-2 items-center'>
                    <IoCheckmark className='text-primary font-medium'/>
                    <p className='text-sm'>Try for Free</p>
                  </div>

                  <div className='flex gap-2 items-center'>
                    <IoCheckmark className='text-primary'/>
                    <p className='text-sm'>No Credit card required</p>
                  </div>

                  <div className='flex gap-2 items-center'>
                    <IoCheckmark className='text-primary'/>
                    <p className='text-sm'>Cancel at Anytime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>   

          <div className='pt-8 px-5 md:px-4'>
            <SliderView data={content}/>
          </div>
        </section>
    </div>
  )
}

export default Banner