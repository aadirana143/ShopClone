import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'

const Home = () => {
    const [Data, setData] = useState([])
    const [find, setFind] = useState([])
    const [category, setcategory] = useState([
        "men's clothing", "jewelery", "electronics"
    ])
    const [loading, setloading] = useState(true)
    console.log(category)

    const getdata = async () => {

        await axios.get('https://fakestoreapi.com/products').then((res) => {
            console.log('dataapi', res)
            setData(res.data)
            setFind(res.data)
            setloading(false)
        }).catch((err) => {
            console.log('getdata error', err)
        })


    }
    useEffect(() => {
        getdata()
    }, [])
    if (loading) {
        return (<div class="text-center loader">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p style={{ color: 'blue' }}>Please Wait A Moment . . .</p>
            <div class="spinner-grow one" role="status">
                <span class="sr-only"></span>
            </div>
            <div class="spinner-grow two" role="status">
                <span class="sr-only "></span>
            </div>
            <div className="spinner-grow three" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
        )
    }
    const Search = (e) => {
        const filterData = Data.filter((cur) => {
            return cur.category.includes(e.target.value)
        })
        setFind(filterData)
    }
    const filt = (e) => {
        console.log('filter target value', e.target.value)
        const ser = Data.filter((cur) => {
            return e.target.value == cur.category
        })
        setFind(ser)
        console.log(ser)
    }



    return (
        <>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active mainfront">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPQNk9TLW-XoxxVx-BkxgnHy0W9vNWBa_xDw&usqp=CAU" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item mainfront">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQN9-lDh5wJZpqXeO8IDKLM_imEhJyqPdWuw&usqp=CAU" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item mainfront">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBhsfKkdzkwGYL3fCYnjJNLwH9np3w9ZAwZg&usqp=CAU" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div className='container-fluid'>
                <div className="row">
                    <div className='col-2 side'>
                        <h4>FILTER BY CATEGORY</h4>
                        <div className='sidebtn'>

                            <div className='filtbutton'>
                                {
                                    category.map((cur) => {
                                        return <button value={cur} onClick={filt}>{cur}</button>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='col-10 '>
                        <div className='carddata row '>
                            <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                                <div><h3>Search Products</h3> </div>
                                <div className='cate px-4 '><input type="text" onChange={Search} /></div>
                            </div>
                            {
                                find.map((cur, ind) => {
                                    return <>
                                        <Card content={cur} index={ind} />
                                    </>

                                })

                            }

                        </div >
                    </div >
                </div>
            </div>
        </>
    )
}

export default Home