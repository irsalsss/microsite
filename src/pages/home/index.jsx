import React from 'react';
import About from '../about';
import Contact from '../contact';

const Home = () => {
  return (
    <div className='container-home'>
      <div className='flex justify-center'>
        <h2 className='title-container mt-1'>
          this is homepage
        </h2>
      </div>
      <About />
      <div className='flex w-full'>
        <div className='wrapper-left items-center'>
          <label
            className='capitalize mb-4-px'
            for="telp"
          >
            no telp
          </label>
          <input id="telp" name="telp" type="text" />
          <button className='white bg-black cursor-pointer mt-1'>
            Go
          </button>
        </div>
        <div className='wrapper-right'>
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default Home