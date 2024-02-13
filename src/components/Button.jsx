import React from 'react'

const Button = ({onClick,btnText}) => {
  return (
    <button className='items-center justify-center rounded-md flex border h-10 w-full mt-3 bg-indigo-600 text-white text-lg font-bold hover:opacity-90 transition-opacity' onClick={onClick}>{btnText}</button>
  )
}

export default Button