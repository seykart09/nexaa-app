import React, {useState} from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'


const SliderView = ({data}) => {
   
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
        },
        created() {
        setLoaded(true)
        },
    })

    return (
        <div>
            <div className="navigation-wrapper relative">
                <div ref={sliderRef} className="keen-slider h-[230px] lg:h-[300px] ">
                    {data.map( (item:any, index:number)=> (
                            <div key={index} className="keen-slider__slide number-slide1">
                                <div className='pb-8' style={{borderBottom:"1.4px solid rgba(33, 74, 220, 0.10)"}}>
                                    <h1 className='text-black text-lg md:text-3xl lg:text-4xl' style={{lineHeight:1.45}}>
                                        This platform has truly revolutionized my career as a lifestyle influencer. Since joining Nexaa, it's been a 
                                        game-changer.
                                    </h1>
                                </div>
                                
                                <div className='flex gap-4 items-center absolute bottom-[10px]'>
                                    <Image 
                                        src={item.image}
                                        alt={`Image ${index}`}
                                        priority
                                        className="object-cover object-center rounded-full w-[56px] h-[56px]"
                                    />

                                    <div>
                                        <h1 className='text-base'>{item.name}</h1>
                                        <p className='text-sm'>{item.occupation}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                    
                </div>
                {loaded && instanceRef.current && (
                <>
                    <Arrow
                    left
                    onClick={(e: any) =>
                        e.stopPropagation() || instanceRef.current?.prev()
                    }
                    disabled={currentSlide === 0}
                    />

                    <Arrow
                    onClick={(e: any) =>
                        e.stopPropagation() || instanceRef.current?.next()
                    }
                    disabled={
                        currentSlide ===
                        instanceRef.current.track.details.slides.length - 1
                    }
                    />
                </>
                )}
            </div>
        </div>
    )
}

export default SliderView;

function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
  }) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" fill="#1C1C1C"
      >
        {props.left && (
            <g>
                <path d="M3 12L21 12" stroke="#1C1C1C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 18L3 12L9 6" stroke="#1C1C1C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
        )}
        {!props.left && (
            <g>
                <path d="M21 12L3 12" stroke="#1C1C1C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 6L21 12L15 18" stroke="#1C1C1C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
        )}
      </svg>
    )
  }