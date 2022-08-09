import React, { useMemo } from 'react';
import '../../styles/pages/about.scss';

const About = () => {
  const loremIpsumcContent = useMemo(() => {
    return (
      <p className='desc-about flex flex-1 items-center white'>
        Lorem ipsum dolor sit amet. Qui molestiae beatae et perferendis odit qui perferendis maiores sit consequatur voluptas. Qui omnis iure aut autem sint est molestias assumenda. At quasi itaque id omnis distinctio nam explicabo odio et amet blanditiis est laboriosam tempore.
      </p>
    )
  }, [])
  return (
    <div className='container-about'>
      <div className='wrapper-left'>
        <h2 className='title-about white mb-1'>
          About 1
        </h2>
        {loremIpsumcContent}
      </div>
      <div className='wrapper-right'>
        <h2 className='title-about white'>
          About 2
        </h2>
        <div className='flex flex-1 items-center'>
          <div className='wrapper-right-content'>
            {loremIpsumcContent}
            {loremIpsumcContent}
            {loremIpsumcContent}
            {loremIpsumcContent}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About