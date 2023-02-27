
import { hero } from '../database/data'

import { HiOutlineCursorClick } from 'react-icons/hi'

const Hero = () => {

  const { title, subtitle, btnText, compText, image } = hero

  return (
    <section className='min-h-[900px] py-12'>
      <div className='container mt-10 mx-auto min-h-[900px] flex justify-center items-center'>
        <div className='flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left'>
          {/* text */}
          <div className='flex-1'>
            <h1
              className='title mb-2 lg:mb-5'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              {title}
            </h1>
            <p
              className='lead mb-5 lg:mb-10'
              data-aos='fade-down'
              data-aos-delay='600'
            >
              {subtitle}
            </p>
            {/* btn & comp text */}
            <div
              className='lg:flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6 hidden'
              data-aos='fade-down'
              data-aos-delay='700'
            >
              <button className='btn btn-md lg:btn-lg btn-redCustom flex justify-center items-center lg:gap-x-4'>
                {btnText}
                <HiOutlineCursorClick />
              </button>
              <span className='text-blackCustom lg:lead lg:mb-0'>
                {compText}
              </span>
            </div>
          </div>
          {/* image */}
          <div className='flex-1' data-aos='fade-up' data-aos-delay='800'>
            <img width='540' height='480' src={image} alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
