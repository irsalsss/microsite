import React, { useState } from 'react'
import useContactStore from '../../stores/useContactStore'

const TelephoneSection = () => {
  const { setContact } = useContactStore();
  const [value, setValue] = useState('')

  const onChange = (event) => {
    const val = event.target.value;
    setValue(val);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setContact(value);
    setValue('');
  }

  return (
    <>
      <label
        className='text-desc capitalize'
        htmlFor="telp"
      >
        no telp
      </label>
      <input
        id="telp"
        name="telp"
        type="text"
        value={value}
        onChange={onChange}
        className="std-input"
      />
      <button
        className='text-desc std-button'
        onClick={onSubmit}
      >
        Go
      </button>
    </>
  )
}

export default TelephoneSection