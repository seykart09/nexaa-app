import React from 'react'
import ThreeColumnSection from './ThreeColumnSection';

const unlockCollaborations = [
    {
      "header":"Opportunities to make more  money as a Creator",
      "text":"Unlock new audiences & revenue while you focus on creating great content"
    },
    {
      "header":"Full insights on what your community loves",
      "text":"Track your content's performance in real-time. Leverage data insights to refine your strategy and maximize your impact."
    },
    {
      "header":"Schedule your content with just one click",
      "text":"Track your content's performance in real-time. Leverage data insights to refine your strategy and maximize your impact."
    },
  
];

const UnlockCollaborations = () => {
  return (
    <section className='container mx-auto px-5 py-[100px]'>
        <div className='text-center'>
        <h1 className='text-[22px] max-w-[345px] lg:text-5xl lg:text-[40px] md:max-w-[692px] mx-auto antialiased'>Unlock Tailored Collaborations for influencers and creators</h1>
        </div>
        <ThreeColumnSection data={unlockCollaborations}/>
    </section>
  )
}

export default UnlockCollaborations