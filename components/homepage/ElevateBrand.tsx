import React from 'react'
import BackgroundImage from '../../assets/bg-footer.png';
import SliderView from '../shared/FooterSliderView';
import Man1 from '@/assets/man-1.jpeg';
import Man2 from '@/assets/man-2.jpeg';
import Man3 from '@/assets/man-3.jpeg';
import Man4 from '@/assets/man-4.jpeg';
import Woman from '@/assets/woman.jpeg';

const ElevateBrand = () => {
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
    <section className='bg-black pt-[100px]' style={{
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '580px',
        }}>
        <div className='container mx-auto px-5 md:px-0'>
          <div className='w-full lg:w-[640px] text-center mx-auto'>
              <h1 className='text-3xl lg:text-5xl text-white'>
                  Ready to Elevate Your <br /> Brand or Influence?
              </h1>

              <div className='md:space-x-4 space-y-4 lg:space-y-0 mt-8'>
                  <button className='bg-primary hover:bg-[#0F3AD2] text-white text-sm rounded-xl px-8 py-4 shadow-button-shadow w-full md:w-auto'>Join as a Brand / Agency</button>
                  <button className='bg-secondary text-black text-sm rounded-xl px-8 py-4 shadow-button-shadow w-full md:w-auto'>Join as a Creator / Influencer</button>
              </div>
          </div>
        </div>
        <div className='pt-[60px]'>
          <SliderView data={content}/>
        </div>
    </section>
  )
}

export default ElevateBrand