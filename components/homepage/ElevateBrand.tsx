import React from 'react'
import BackgroundImage from '../../assets/bg-footer.png';

const ElevateBrand = () => {
  return (
    <section className='bg-black pt-[100px]' style={{
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '800px',
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
    </section>
  )
}

export default ElevateBrand