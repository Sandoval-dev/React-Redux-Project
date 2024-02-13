import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useSelector } from "react-redux"
import Modal from '../components/Modal'
import Input from '../components/Input'
import Button from '../components/Button'
import { useDispatch } from 'react-redux'
import { createDataFunc, updateDataFunc } from '../redux/dataSlice'
import { modalFunc } from '../redux/modalSlice'
import { useLocation, useNavigate } from 'react-router-dom'



const Product = () => {

  const { modal } = useSelector(state => state.modal)
  const { data, keyword } = useSelector(state => state.data)
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const [productInfo, setProductInfo] = useState({ name: "", price: "", url: "" })

  const onChangeFunc = (e, type) => {

    if (type === 'url') {

      setProductInfo(prev => ({ ...prev, [e.target.name]: URL.createObjectURL(e.target.files[0]) }))
    } else {
      setProductInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
  }

  let loc = location?.search.split('=')[1]


  useEffect(() => {

    if (loc) {
      setProductInfo(data.find(dt => dt.id == loc))
    }
  }, [loc])

  console.log(location?.search.split('=')[1])
  const buttonFunc = () => {
    dispatch(createDataFunc({ ...productInfo, id: data.length + 1 }))
    dispatch(modalFunc())
    setProductInfo("")
  }

  const buttonUpdateFunc = () => {
      dispatch(updateDataFunc({...productInfo, id:loc}))
      dispatch(modalFunc())
      navigate('/')
  }

  const contentModel = (
    <>
      <Input value={productInfo.name} type={"text"} id={"name"} placeholder={"Ürün Ekle"} name={"name"} onChange={e => onChangeFunc(e, "name")} />
      <Input value={productInfo.price} type={"text"} id={"price"} placeholder={"Fiyat Ekle"} name={"price"} onChange={e => onChangeFunc(e, "price")} />
      <Input type={"file"} id={"url"} placeholder={"Resim Seç"} name={"url"} onChange={e => onChangeFunc(e, "url")} />
      <Button onClick={loc ? buttonUpdateFunc : buttonFunc} btnText={loc ? "Ürün Güncelle" : "Ürün Oluştur"}></Button>
    </>
  )

  const filteredItems = data.filter(dt => dt.name.toLowerCase().includes(keyword))

  return (
    <div>
      <div className='flex items-center flex-wrap'>
        {
          filteredItems?.map((dt, i) => (
            <ProductCard key={i} dt={dt} />
          ))
        }
      </div>

      {modal && <Modal content={contentModel} title={loc ? "Ürün Güncelle" : "Ürün Oluştur"} />}
    </div>
  )
}

export default Product