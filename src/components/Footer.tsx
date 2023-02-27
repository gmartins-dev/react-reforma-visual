import { footer } from '../database/data'

import Copyright from './Copyright'

const Footer = () => {
  const { logo, links, newsletter, form } = footer

  return (
    <footer className='pt-[142px] pb-[60px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-between gap-y-8'>
          <div data-aos='fade-up' data-aos-offset='200' data-aos-delay='300'>
            <img src={logo} alt='' />
          </div>
          <div data-aos='fade-up' data-aos-offset='200' data-aos-delay='900'>
            <div className='text-2xl uppercase font-medium mb-6'>
              {newsletter.title}
            </div>
            <div className='text-xl text-blackCustom mb-[18px]'>
              {newsletter.subtitle}
            </div>
            <form className='max-w-[349px] mb-[10px]'>
              <div className='h-[62px] p-[7px] flex border border-darkGreenCustom rounded-lg'>
                <input
                  className='w-full h-full pl-6 border-none outline-none placeholder:text-darkGreenCustom bg-whiteCustom'
                  type='text'
                  placeholder={form.placeholder}
                />
                <button className='btn btn-sm bg-darkGreenCustom hover:bg-greenCustom w-[102px] text-white'>
                  {form.btnText}
                </button>
              </div>
            </form>
            <span className='text-sm text-blackCustom'>{form.smallText}</span>
          </div>
        </div>

        <hr
          className='mt-10 mb-5'
          data-aos='fade-up'
          data-aos-offset='100'
          data-aos-delay='200'
        />

        <Copyright />
      </div>
    </footer>
  )
}

export default Footer
