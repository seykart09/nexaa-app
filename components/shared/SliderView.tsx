import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';


const SliderView = ({data}) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerPadding: "60px",
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    console.log(data);

    return (
        <div className='space-x-4'>
            <Slider {...settings}>
                {data.map((item:any,index:number) =>(
                    <div key={index} className="relative mr-4" style={{width:300, height:400}}>
                        <Image
                            src={item.image}
                            alt="object-cover rounded-lg mr-4 w-full h-full"
                            className=""
                        />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default SliderView