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
        <div className='w-[640px] text-center mx-auto'>
            <h1 className='text-5xl text-white font-medium'>
                Ready to Elevate Your <br /> Brand or Influence?
            </h1>

            <div className='space-x-4 mt-8'>
                <button className='bg-primary text-white text-sm rounded-xl px-8 py-4 shadow-button-shadow'>Join as a Brand / Agency</button>
                <button className='bg-secondary text-black text-sm rounded-xl px-8 py-4 shadow-button-shadow'>Join as a Creator / Influencer</button>
            </div>
        </div>
    </section>
  )
}

export default ElevateBrand