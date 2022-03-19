import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { Addcart } from '../Redux/Action'


const Card = (props) => {
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const hide = true
    const add = (data) => {
        dispatch(Addcart(data))
    }
    const goTocart = () => {
        navigation('/cart')
    }
    return (
        <>
            <div className="col-12 col-sm-6 gy-0 col-md-6 col-lg-4 ">
                <div className="card p-3 mt-0  border-0">
                    <div className='apidata'>
                        <div className='image'> <img src={props.content.image} style={{ width: '280px,', height: '130px' }} className="card-img-top image" alt="image" />
                            <NavLink className="nav-link " aria-current="page" to={`/detail${props.content.id}`} > <button className='cartbtn'>Detail</button></NavLink>
                        </div>
                        <div className="card-body textx">
                            <p className="card-title">category -{props.content.category}</p>
                            <p className="card-text">price -{props.content.price}</p>
                            <h6 className="card-text">Title -{props.content.title.slice(0, 10)}</h6>
                            {
                                hide ? <button className='w-100 ms-0 cartbtn' onClick={() => add(props.content)}>Add To Cart</button> : <button className='w-100 ms-0' onClick={goTocart}>Go To Cart</button>
                            }

                        </div >
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card

