import React from 'react'
import ThreeColumnSection from './ThreeColumnSection';

const effortlessCollaborations = [
    {
      "header":"Find influencers and creators who align with your brand ",
      "text":"Co-create content that resonates with your target audience, fostering authenticity and."
    },
    {
      "header":"Simplify the collaboration process with influencers",
      "text":"Draft, negotiate, and sign agreements with ease, ensuring smooth partnerships."
    },
    {
      "header":"Get live insights of content posted by influencers",
      "text":"Track your content's performance in real-time. Leverage data insights to refine your."
    },
  
];

const EffortlessCollaboration = () => {
  return (
    <section className='container mx-auto section py-[100px]'>
        <div className='text-center'>
        <h6 className='text-3xl'>Effortless Collaborations for Brands and Agencies</h6>
        </div>
        <ThreeColumnSection data={effortlessCollaborations}/>

    </section>
  )
}

export default EffortlessCollaboration