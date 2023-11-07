import React from 'react'
import Image from 'next/image'
import Man1 from '@/assets/man-1.jpeg';
import Man2 from '@/assets/man-2.jpeg';
import Man3 from '@/assets/man-3.jpeg';
import Man4 from '@/assets/man-4.jpeg';
import Woman from '@/assets/woman.jpeg';

const FindCreators = () => {
    const filterOptions = [
        {
            "label": "All Influencers",
            "query":"all"
        },
        {
            "label": "Mega-Influencers > 1,000,000",
            "query":"all"
        },
        {
            "label": "Macro-Influencers <100,000",
            "query":"all"
        },
        {
            "label": "Micro-Influencers <50,000",
            "query":"all"
        },
        {
            "label": "Nano-Influencers <10,000",
            "query":"all"
        },
    ]

    const content = [
        {
          "image":Man1,
          "name":"Zippydray✨🏳️‍🌈🇱🇷",
          "followers":"42k",
          "tags":["Travel", "Food", "Explore", "Lifestyle", "Digital Normad", "Investment",]
        },
        {
          "image":Man2,
          "name":"Seykart09🇱🇷",
          "followers":"200",
          "tags":["Travel", "Food", "Explore"]
        },
        {
          "image":Man3,
          "name":"Seykart09",
          "followers":"5k",
          "tags":["Travel", "Food", "Explore"]
        },
        {
          "image":Man4,
          "name":"Seykart09🇱🇷",
          "followers":"5k",
          "tags":["Travel", "Food", "Explore"]
        },
        {
          "image":Woman,
          "name":"Seykart09",
          "followers":"5k",
          "tags":["Travel", "Food", "Explore"]
        },
        {
          "image":Man1,
          "name":"Seykart09",
          "followers":"42k",
          "tags":["Travel", "Food", "Explore"]
        },
        {
          "image":Man2,
          "name":"Seykart09",
          "followers":"200",
          "tags":["Travel", "Food", "Explore"]
        },
        {
          "image":Man3,
          "name":"Seykart09",
          "followers":"5k",
          "tags":["Travel", "Food", "Explore"]
        },
        {
          "image":Man4,
          "name":"Seykart09",
          "followers":"5k",
          "tags":["Travel", "Food", "Explore"]
        },
        {
          "image":Woman,
          "name":"Seykart09",
          "followers":"5k",
          "tags":["Travel", "Food", "Explore"]
        },
        {
          "image":Man3,
          "name":"Seykart09",
          "followers":"5k",
          "tags":["Travel", "Food", "Explore"]
        },
        {
          "image":Man4,
          "name":"Seykart09",
          "followers":"5k",
          "tags":["Travel", "Food", "Explore"]
        },
        {
          "image":Woman,
          "name":"Seykart09",
          "followers":"5k",
          "tags":["Travel", "Food", "Explore"]
        },
    ];

    return (
        <>
            <section className='pt-32 lg:pt-40 h-full flex flex-col justify-around'>
            <div className="container mx-auto px-5 md:px-4 lg:px-0">
                <div className='w-full md:w-3/5 lg:w-[686px] mx-auto'>
                <div className='text-center'>
                    <h1 className='text-3xl lg:text-[40px] antialiased '>Find an influencer / creator</h1>
                    <p className='text-base px-2 md:px-16 lg:px-10 font-black'>Discover influencer pricing, gain insight of their reach, work with them</p>
                </div>
                <div className=''>
                    <div className='flex flex-col lg:flex-row justify-center lg:space-x-4 w-full mt-9'>
                    <div className="relative rounded-md shadow-sm">
                        <input
                        type="text"
                        name="price"
                        id="price"
                        className="block w-full lg:w-[532px] bg-[#F0F0F0] rounded-xl border-none p-4 text-gray-500  placeholder:text-gray-400  sm:text-sm sm:leading-6 z-1 focus:border-[#214ADC] hover:border-[#214ADC]"
                        placeholder="Enter Your Email"
                        />
                    </div>
                    <button className='w-full md:w-auto py-4 bg-primary hover:bg-[#0F3AD2] text-white rounded-xl md:px-10 shadow-xl mt-5 lg:mt-0'>Search</button>
                    </div>
                </div>
                </div>
            </div>   
            </section>

            <section className='pt-[93px]'>
                <div className='container mx-auto px-5 md:px-4 lg:px-0'>
                    <div className="grid grid-cols-6 gap-4">
                        <div className='hidden lg:block'>
                            <h1 className='text-xs mb-4'>Type of Influencers</h1>

                            <div>
                                <ul className='space-y-2'>
                                    <li className='h2 text-[13px] font-black bg-grey py-3 ps-4 rounded-[10px]'>
                                        All Influencers
                                    </li>
                                    {filterOptions.map((item:any, index:number) => (
                                        <li key={index} className='h2 text-[13px] rounded-[10px] py-3 ps-4 '>
                                            {item.label}
                                        </li>
                                    )
                                    )}
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-start-1 col-end-7 lg:col-start-2 lg:col-span-4 w-full lg:w-[784px] mx-auto pb-8 ...">
                            <div>
                                {content.map( (item:any, index:number)=> (
                                    <div className='py-8' style={{borderBottom:"2px solid rgba(240, 240, 240, 1)", borderTop:"2px solid rgba(240, 240, 240, 1)"}}>
                                        <div className='flex flex-col md:flex-row gap-3 justify-between'>
                                            <div className='flex gap-4 items-center'>
                                                <div>
                                                    <Image
                                                        src={item.image}
                                                        priority
                                                        className="object-cover object-top rounded-full w-[100px] h-[100px]"
                                                    />
                                                </div>
                                                <div className=''>
                                                    <h1 className='text-lg'>{item.name}</h1>
                                                    <h6 className='text-base'>{item.followers} Followers</h6>
                                                    <p className='text-sm'>Abu dabi, Marshall islands</p>
                                                </div>
                                            </div>
                                            <div>
                                                <button className='bg-black text-white px-6 py-2 rounded-lg w-full md:w-auto'>
                                                    View Profile
                                                </button>
                                            </div>
                                            
                                        </div>

                                        <div className='flex flex-wrap gap-2 mt-6'>
                                            {item.tags.map((tag:string, index:number) => 
                                                <p key={index} className='text-[13px] bg-grey py-2 px-4 lg:py-3 lg:px-6 rounded-full'>{tag}</p>
                                            )}
                                        </div>
                                    </div>
                                    )
                                )}
                            </div>
                        </div>
                        <div className='hidden lg:block'>
                            <div className='mb-6'>
                                <h1 className='text-xs mb-2'>I want to promote</h1>
                                <div>
                                    <textarea className='bg-grey p-4 w-full rounded-xl resize-none font-futura-lt text-base text-[#696969]' placeholder='Tell us what you want to promote' name="" id="" rows="5"></textarea>
                                </div>
                            </div>

                            <div className='mb-6'>
                                <h1 className='text-xs mb-2'>Country</h1>
                                <div>
                                    <select className='bg-grey p-4 w-full rounded-xl resize-none font-futura-lt text-base text-[#696969]' placeholder='Tell us what you want to promote' name="">
                                        <option value="">Select Countries</option>
                                        <option value="">Ghana</option>
                                        <option value="">Nigeria</option>
                                    </select>
                                </div>
                            </div>

                            <div className='mb-6'>
                                <h1 className='text-xs mb-2'>Categories</h1>
                                <div>
                                    <select className='bg-grey p-4 w-full rounded-xl resize-none font-futura-lt text-base text-[#696969]' placeholder='Tell us what you want to promote' name="">
                                        <option value="">Select Categories</option>
                                        <option value="">Ghana</option>
                                        <option value="">Nigeria</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FindCreators