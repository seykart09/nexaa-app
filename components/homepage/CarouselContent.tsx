import React from 'react'
import Image from 'next/image'
import dots from '@/assets/dots.svg';
import Link from 'next/link';
import { BsArrowUpRight } from "react-icons/bs";
import Progress from '../shared/Progress';


interface CarouselContentProp {
    header: string;
    data: string;
    currentIndex: number;
    index: number;
    state: string;
}

const CarouselContent = ({header, data, currentIndex, index, state} : CarouselContentProp) => {

  return (
    <div>
        <div className='mb-8'>
                <Link href="/" className='flex flex-row space-x-2 mb-8'>
                        <div>
                            <Image
                                src={dots}
                                alt=""
                                className="object-contain"
                                width={32}
                                height={32}
                            />
                        </div>
                        <div className='w-full md:w-[381px] lg:w-[318px]'>
                            <h1 className='text-lg md:text-xl text-blue-700 antialiased'>{header}</h1>
                            <p className='text-base'>{data}</p>
                        </div>
                        <div>
                            <BsArrowUpRight className='text-primary'/>
                        </div>
                </Link>
                <Progress currentIndex={currentIndex} index={index} progress={state}/>
            </div>
    </div>
  )
}

export default CarouselContent