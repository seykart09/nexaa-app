import React, {useState,useEffect} from 'react'
import Image from 'next/image';
import CarouselImage1 from '@/assets/personalized-link.png';
import CarouselImage2 from '@/assets/carousel-img-2.png';
import CarouselContent from './CarouselContent';


const content = [
    {
        "image-src":CarouselImage1,
        "header":"Get Personalized Link",
        "data":"Create profile and connect with brands.",
    },
    {
        "image-src":CarouselImage2,
        "header":"Find Creators & Influencers",
        "data":"Create profile and connect with brands.",
    },
    {
        "image-src":CarouselImage1,
        "header":"Schedule your Contents",
        "data":"From sponsored posts to product reviews.",
    },
];

const Carousel = () => {
const images  = [CarouselImage1, CarouselImage2, CarouselImage1];
const [currentIndex, setCurrentIndex] = useState(0);
const [progress, setProgress] = useState(0);

useEffect (() => {
    if (progress < 100){
        setTimeout(() => 
        {
            setProgress(prev => prev + 2);
        }, 50)
    }
    else{
        setCurrentIndex(currentIndex => currentIndex + 1);
        setProgress(0)

        if(currentIndex >= content.length - 1){
            setCurrentIndex(0);
        }
    }
});

const image = images[currentIndex % images.length];
let state = `${progress}%`;
// console.log("currentIdndex", currentIndex)

return (
    
    <section className='container mx-auto px-5 py-[78px] md:w-4/5 lg:w-full'>
        <div className="flex flex-col flex-col-reverse lg:flex-row gap-y-10 lg:gap-y-0 items-center lg:justify-around">
        <div className='w-full lg:w-[438px]'>
            {content.map((item,index) => (
                <CarouselContent key={index} header={item.header} data={item.data} currentIndex={currentIndex} index={index} state={state} />
            ))}
        </div>
        <div className='w-full lg:w-[550px]'>
            <Image
                src={image}
                alt=""
                className="object-contain w-full transition-all duration-300"
            />
        </div>
        </div>
    </section>
  )
}

export default Carousel