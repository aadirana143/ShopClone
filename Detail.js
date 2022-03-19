import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Addcart } from '../Redux/Action'

const Detail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [Dataid, setDataid] = useState([])
    const dataid = async () => {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
        console.log('dtail', res)
        console.log('tail', res.data)
        setDataid(res.data)
    }
    useEffect(() => {
        dataid()
    }, [])
    const cartD = (data) => {
        dispatch(Addcart(data))
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-sm-12 d_image'>
                        <img src={Dataid.image} alt="image" width={400} height={300} /><br />
                        <NavLink to="/"> <button>Back To Home</button></NavLink>

                    </div>
                    <div className='col-12 col-md-6 col-sm-12 carddetail '>
                        <h1>Price -{Dataid.price} Rs</h1>
                        <p className="card-title">category -{Dataid.category}</p>
                        <h6 className="">Title -{Dataid.title}</h6>
                        <h6 className="">Discription-{Dataid.description}</h6>
                        <button onClick={() => cartD(Dataid)}>Add To Cart</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail