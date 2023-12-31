import React from 'react'
import findCreators from '@/assets/find-creator.png';
import Image from 'next/image'
import TwoGridView from './TwoGridView';


const impressions = [
    {
      "header":"Thousands of creators to elevate your brand. ",
      "buttonText":"Get Started for Free",
      "image": findCreators,
    },
];

const Creators = () => {
  return (
      <TwoGridView data={impressions[0]}/>
  )
}

export default Creators