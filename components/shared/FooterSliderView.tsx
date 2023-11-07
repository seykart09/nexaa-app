import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

const animation = { duration: 30000, easing: (t: number) => t }

const SliderView = ({data}) => {
   
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        breakpoints: {
            "(min-width: 400px)": {
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
                slides: { perView: 2.75, spacing: 15 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 7.5, spacing: 15 },
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
                    <div key={index} className="keen-slider__slide number-slide1 h-[215px] relative">
                        <Image
                            src={item.image}
                            alt={`Image ${index}`}
                            priority
                            className="object-cover object-center h-full rounded-[20px]"
                        />
                    </div>

                ))}
            </div>
        </div>
    )
}

export default SliderView