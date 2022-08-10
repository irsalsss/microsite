import React from 'react';
import AboutSection from '../about/AboutSection';
import ContactSection from '../contact/ContactSection';
import TelephoneSection from './TelephoneSection';
import '../../styles/pages/home.scss';

const Home = () => {
  return (
    <div className='container-home flex flex-1 flex-col'>
      <div className='flex justify-center'>
        <h2 className='title-container mt-1'>
          this is homepage
        </h2>
      </div>
      <AboutSection />
      <div className='flex w-full'>
        <div className='wrapper-left items-center'>
          <TelephoneSection />
        </div>
        <div className='wrapper-right'>
          <ContactSection />
        </div>
      </div>
    </div>
  )
}

export default Home