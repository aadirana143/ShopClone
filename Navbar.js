import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';


const Navbar = () => {
    const number = useSelector((Store) => {
        return Store.choice
    })
    const [cartL, setCartL] = useState(number.Cart)
    useEffect(() => {
        setCartL(number.Cart)
    }, [number])

    return (
        <>
            <nav className="navbar navbar-expand-lg  background">
                <div className="container-fluid" style={{ position: "fixed" }}>
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon togg"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/product">product</NavLink>
                            </li>
                            <li className="nav-item">
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/cart">cart</NavLink>
                            </li>
                            <li className="nav-item cartspan">
                                <NavLink className="nav-link " aria-current="page" to="/User">User </NavLink>
                            </li>
                            <li className="nav-item cartspan">
                                <NavLink className="nav-link " aria-current="page" to="/cart"> <FaShoppingCart /><span> {cartL.length} </span></NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar