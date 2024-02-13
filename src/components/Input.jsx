import React from 'react'

const Input = ({ type, value, id, name, onChange, placeholder }) => {
    return (
        <input value={value} className='outline-none h-10 w-full border rounded-md p-2 mt-3' placeholder={placeholder} type={type} id={id} name={name} onChange={onChange} />
    )
}

export default Input