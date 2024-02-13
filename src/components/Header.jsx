import React from 'react'
import { MdPostAdd } from "react-icons/md";
import {useDispatch} from 'react-redux'
import { modalFunc } from '../redux/modalSlice';
import { searchDataFunc, sortingDataFunc } from '../redux/dataSlice';



const Header = () => {

    const dispatch = useDispatch()


   

    return (
        <div className='flex justify-between items-center bg-indigo-600 text-white px-4 py-3'>
            <div className='text-2xl font-bold'>React Uygulama</div>
            <div className='flex items-center gap-5'>
                <div className='text-black'>
                    <select onChange={e => dispatch(sortingDataFunc(e.target.value))} className='h-10 rounded-lg' name="" id=''>
                        <option value="asc">ARTAN</option>
                        <option value="desc">AZALAN</option>
                    </select>
                </div>
                <div>
                    <input onChange={e => dispatch(searchDataFunc(e.target.value))} className='h-10 rounded-lg px-4 text-black' type="text" placeholder='Arama yapınız...' />
                </div>
                <div onClick={() => dispatch(modalFunc())} className='bg-indigo-800 w-10 h-10 rounded-full items-center flex justify-center cursor-pointer'>
                <MdPostAdd size={26} />
                </div>
            </div>
        </div>
    )
}

export default Header