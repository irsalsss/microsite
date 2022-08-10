import React from 'react'
import useContactStore from '../../stores/useContactStore'

const ContactSection = () => {
  const { contact } = useContactStore();
  return (
    <div className='container-contact p-1'>
      <p className='uppercase'>pt. abc</p>
      <p>Jl Setiabudi no 33</p>
      <p>{contact}</p>
    </div>
  )
}

export default ContactSection