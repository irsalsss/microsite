import React from 'react'
import useContactStore from '../../stores/useContactStore'

const ContactSection = () => {
  const { contact } = useContactStore();
  return (
    <div className='container-contact p-1'>
      <p className='text-desc uppercase'>pt. abc</p>
      <p className='text-desc'>Jl Setiabudi no 33</p>
      <p className='text-desc'>{contact}</p>
    </div>
  )
}

export default ContactSection