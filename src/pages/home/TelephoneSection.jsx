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
        className='capitalize mb-4-px'
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
      />
      <button
        className='px-8-px py-4-px rounded-4-px border-black white bg-black cursor-pointer mt-1'
        onClick={onSubmit}
      >
        Go
      </button>
    </>
  )
}

export default TelephoneSection