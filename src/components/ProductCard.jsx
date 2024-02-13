import React, { useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from 'react-redux'
import { deleteDataFunc } from '../redux/dataSlice';
import { modalFunc } from '../redux/modalSlice';
import {useNavigate} from 'react-router-dom'



const ProductCard = ({ dt }) => {
  const [openEdit, setOpenEdit] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const updateFunc = () => {
    dispatch(modalFunc())
    setOpenEdit(false)
    navigate(`/?update=${dt?.id}`)
    
  }
  return (
    <div className='w-[200px] h-[200px] relative m-2 rounded-md'>

      <img src={dt?.url} className='w-full h-full rounded-md' alt="" />
      <div className='absolute left-0 bottom-0 bg-indigo-600 text-white w-full px-2 flex items-center justify-center flex-col'>
        <div className='text-xl font-semibold uppercase'>{dt?.name} </div>
        <div>{dt?.price} € </div>
      </div>
      <div onClick={() => setOpenEdit(!openEdit)} className='absolute top-0 left-2 cursor-pointer' >
      <BsThreeDots color='black' size={25} />
      </div>
      {
        openEdit && (
          <div className='bg-black border border-white text-white absolute top-5 left-0 p-2  text-sm'>
            <div onClick={() => dispatch(deleteDataFunc(dt?.id))} className='cursor-pointer'>Sil</div>
            <div onClick={() => updateFunc()}  className='cursor-pointer'>Güncelle</div>
          </div>
        )
      }
    </div>
  )
}

export default ProductCard