import React from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";
import {useDispatch} from 'react-redux'
import { modalFunc } from '../redux/modalSlice';


const Modal = ({ title, content }) => {

  const dispatch= useDispatch()


  return (
    <div className='fixed top-0 left-0 bottom-0 right-0 w-full h-screen flex items-center justify-center'>
      <div className='w-1/3 bg-white shadow-lg rounded-md p-4'>
        <div className='border-b py-3 flex justify-between items-center'>
          <div className='text-2xl'>{title}</div>
          <IoMdCloseCircleOutline className='cursor-pointer' onClick={() => dispatch(modalFunc())} size={25} />

        </div>
       {content}
      </div>
    </div>
  )
}

export default Modal