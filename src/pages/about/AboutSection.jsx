import React, { useCallback, useMemo } from 'react';

const AboutSection = () => {
  const loremIpsumcContent = useMemo(() => {
    return (
      <p className='desc-container flex flex-1 items-center white'>
        Lorem ipsum dolor sit amet. Qui molestiae beatae et perferendis odit qui perferendis maiores sit consequatur voluptas. Qui omnis iure aut autem sint est molestias assumenda. At quasi itaque id omnis distinctio nam explicabo odio et amet blanditiis est laboriosam tempore.
      </p>
    )
  }, [])

  const titleContent = useCallback((title) => {
    return (
      <h2 className='title-container white'>
        {title}
      </h2>
    )
  }, [])

  return (
    <div className='container-about'>
      <div className='wrapper-left items-center bg-yellow'>
        {titleContent('about 1')}
        {loremIpsumcContent}
      </div>
      <div className='wrapper-right items-center bg-grey'>
        {titleContent('about 2')}
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

export default AboutSection