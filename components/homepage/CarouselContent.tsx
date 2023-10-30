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
                            />
                        </div>
                        <div>
                            <h5 className='text-xl text-blue-700'>{header}</h5>
                            <p>{data}</p>
                        </div>
                        <div>
                            <BsArrowUpRight className='text-blue-700'/>
                        </div>
                </Link>
                <Progress currentIndex={currentIndex} index={index} progress={state}/>
            </div>
    </div>
  )
}

export default CarouselContent