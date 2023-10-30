import React from 'react'
import insights from '../../assets/insights.png';
import Image from 'next/image'
import TwoGridView from './TwoGridView';

const impressions = [
    {
      "header":"Get live insights of impressions, reach on your contents",
      "buttonText":"Get Started for Free",
      "image": insights,
    },
];

const Impressions = () => {
  return (
    <TwoGridView data={impressions[0]}/>
  )
}

export default Impressions