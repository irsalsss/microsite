import React from 'react';
import AboutSection from '../about/AboutSection';
import ContactSection from '../contact/ContactSection';

const Home = () => {
  return (
    <div className='container-home'>
      <div className='flex justify-center'>
        <h2 className='title-container mt-1'>
          this is homepage
        </h2>
      </div>
      <AboutSection />
      <div className='flex w-full'>
        <div className='wrapper-left items-center'>
          <label
            className='capitalize mb-4-px'
            htmlFor="telp"
          >
            no telp
          </label>
          <input id="telp" name="telp" type="text" />
          <button
            className='px-8-px py-4-px rounded-4-px border-black white bg-black cursor-pointer mt-1'
          >
            Go
          </button>
        </div>
        <div className='wrapper-right'>
          <ContactSection />
        </div>
      </div>
    </div>
  )
}

export default Home