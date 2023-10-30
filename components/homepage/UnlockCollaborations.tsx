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
    <section className='container mx-auto section py-[100px]'>
        <div className='text-center'>
        <h6 className='text-3xl'>Unlock Tailored Collaborations for influencers and creators</h6>
        </div>
        <ThreeColumnSection data={unlockCollaborations}/>
    </section>
  )
}

export default UnlockCollaborations