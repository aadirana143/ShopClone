import React, { useState } from 'react'

const User = () => {
    const [user, setUser] = useState({
        yourname: '',
        mobile: '',
        address: '',
        dist: '',
        pin: ''

    })
    const add = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }

    const clic = (f) => {
        f.preventDefault()
        setUser(
            {
                ...user,
                yourname: '',
                mobile: '',
                address: '',
                dist: '',
                email: '',
            },
            alert('thnk'),
            console.log(user)
        )
    }

    return (
        <>
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">name</label>
                        <input onChange={add} value={user.yourname} type="text" name='yourname' className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Mobile</label>
                        <input onChange={add} value={user.mobile} type="text" name='mobile' className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Address</label>
                        <input onChange={add} value={user.address} type="text" name='address' className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Dist</label>
                        <input onChange={add} value={user.dist} type="text" name='dist' className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">email</label>
                        <input onChange={add} value={user.email} type="text" name='email' className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button onClick={clic} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default User