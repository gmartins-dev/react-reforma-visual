import React, { useState } from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { products } from '../database/data'
const Products = () => {
  const [index, setIndex] = useState(1)

  const { title, cards } = products

  return (
    <section className='section'>
      <div className='container mx-auto'>
        {/* title */}
        <h2
          className='h2 mb-10 lg:mb-20 text-center'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          {title}
        </h2>
        {/* cards */}
        <div className='flex flex-col lg:flex-row lg:gap-x-[30px] gap-y-[30px] lg:gap-y-0 justify-center items-center'>
          {cards.map((card, cardIndex) => {
            const { icon, title, description, btnText, delay } = card
            // card
            return (
              <div
                data-aos='fade-up'
                data-aos-delay={delay}
                data-aos-offset='300'
                key={cardIndex}
              >
                <div
                  onClick={() => setIndex(cardIndex)}
                  className=' bg-customGrey shadow-2xl w-[350px] h-[550px] rounded-[12px] p-[40px] cursor-pointer transition-all'
                >
                  <div className='mb-6 w-16 mx-auto '>
                    <img src={icon} alt='' />
                  </div>
                  <div className='text-[32px] font-semibold mb-6 text-center'>
                    {title}
                  </div>
                  <div className='flex flex-col gap-y-2 mb-6'></div>
                  <div className='mb-10'>
                    <span className='text-xl text-light font-light break-words'>
                      {description}
                    </span>
                  </div>
                  <button className='bg-white hover:bg-whiteCustom w-full  border border-darkGreen text-accent btn btn-sm space-x-[14px]'>
                    <span>{btnText}</span>
                    <HiOutlineExternalLink />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Products
