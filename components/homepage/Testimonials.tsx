import React from 'react'
import Image from 'next/image'
import blank from '@/assets/blank-image.png';
import SliderView from '../shared/TestimonialSliderView';
import Man1 from '@/assets/man-1.jpeg';
import Man2 from '@/assets/man-2.jpeg';
import Man3 from '@/assets/man-3.jpeg';
import Man4 from '@/assets/man-4.jpeg';
import Woman from '@/assets/woman.jpeg';

export const Testimonials = () => {

    const content = [
        {
          "image":Man1,
          "name":"Seyram Kartey",
          "occupation":"lifestyle influencer",
          "quote":"This platform has truly revolutionized my career as a lifestyle influencer. Since joining Nexaa, it's been a game-changer."
        },
        {
            "image":Man2,
            "name":"Seyram Kartey",
            "occupation":"Palace Mall",
            "quote":"This platform has truly revolutionized my career as a lifestyle influencer. Since joining Nexaa, it's been a game-changer."
        },
        {
            "image":Man3,
            "name":"Zippy Kartey",
            "occupation":"lifestyle influencer",
            "quote":"This platform has truly revolutionized my career as a lifestyle influencer. Since joining Nexaa, it's been a game-changer."
        },
        {
            "image":Woman,
            "name":"Adeola Kartey",
            "occupation":"lifestyle influencer",
            "quote":"This platform has truly revolutionized my career as a lifestyle influencer. Since joining Nexaa, it's been a game-changer."
        }
    ];

  return (
    <section className='pb-10'>
        <div className="flex items-center">
            <div className='hidden lg:block w-[455px]'>
                    <Image
                        src={blank}
                        alt="w-[455px]"
                        className="object-contain h-full"
                    />
            </div>
            <div className='container mx-auto px-5 w-full lg:w-[985px]'>
                <SliderView data={content}/>
            </div>
        </div>
    </section>
  )
}
