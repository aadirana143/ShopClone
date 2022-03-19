import React from 'react'
import { removecart } from '../Redux/Action'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


const Cart = () => {
    const dispatch1 = useDispatch()
    const remove = (index) => {
        dispatch1(removecart(index))
    }
    const mycart = useSelector((Store) => {
        return Store.choice.Cart
    })


    return (
        <>
            <table class="table">
                <thead>
                    <tr>

                        <th scope="col"></th>
                        <th scope="col">Item</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">category</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                {
                    mycart.map((cur, ind) => {
                        return (
                            <>
                                <tr>
                                    <td></td>
                                    <td ><img src={cur.image} alt="" width={100} height={100} className='px-0' /></td>
                                    <td className='px-3'>{1}</td>
                                    <td><h4>{cur.price}</h4></td>
                                    <td><h4>{cur.category}</h4></td>
                                    <td><button onClick={() => remove(cur.id)}>Remove</button></td>
                                </tr>

                            </>
                        )
                    })
                }
                <tbody>

                </tbody>
            </table>
            <NavLink className="nav-link " aria-current="page" to="/" style={{ textAlign: 'end', color: 'red' }}>back to home</NavLink>
            <NavLink className="nav-link address" aria-current="page" to="/user" style={{ textAlign: 'center', color: 'red' }}>Add Your Address To Deliver Your Cart Product</NavLink>
        </>
    )
}

export default Cart
