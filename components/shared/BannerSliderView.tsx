import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

const animation = { duration: 30000, easing: (t: number) => t }

const SliderView = ({data}) => {
   
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        breakpoints: {
            "(min-width: 400px)": {
                slides: { perView: 2.75, spacing: 15 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 5.5, spacing: 15 },
            },
        },
        loop: true,
        renderMode: "performance",
        // drag: false,
        created(s) {
            s.moveToIdx(5, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        slides: {
          perView: 1.5,
          spacing: 15,
        },
      })

    return (
        <div className='space-x-4'>
            <div ref={sliderRef} className="keen-slider">
                {data.map((item:any,index:number) => (
                    <div key={index} className="keen-slider__slide number-slide1 h-[300px] relative">
                        <Image
                            src={item.image}
                            alt={`Image ${index}`}
                            priority
                            className="object-cover object-center h-full rounded-[20px]"
                        />

                        <div className='absolute bottom-[15px] w-full px-3'>
                            <div className='bg-white text-black rounded-[14px] p-3 space-y-1'>
                                <h1 className='text-base'>{item.name}</h1>
                                <p className='text-sm'>{item.followers} Followers</p>
                                <div className='flex flex-wrap gap-2'>
                                    {item.tags.map((tag:string, index:number) => 
                                        <p key={index} className='text-xs bg-alternate py-1 px-2 rounded-full'>{tag}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default SliderView