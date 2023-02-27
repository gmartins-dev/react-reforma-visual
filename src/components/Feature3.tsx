import React from 'react'
import { features } from '../database/data'
const Feature3 = () => {
  const { feature3 } = features
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature3

  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]'>
          <div
            className='flex-1 order-2 lg:order-1'
            data-aos='fade-right'
            data-aos-offset='300'
          >
            <img width='540' height='430' src={image} alt='' />
          </div>
          <div
            className='flex-1 order-1 lg:order-2'
            data-aos='fade-left'
            data-aos-offset='400'
          >
            <div className='pretitle'>{pretitle}</div>
            <h2 className='title'>{title}</h2>
            <p className='lead'>{subtitle}</p>
            <button className='btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all mb-6'>
              {btnLink} <img src={btnIcon} alt='' />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature3
