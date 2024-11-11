import React from 'react'
import { products } from '../data/ProductsData'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa6";

function Sliceearbuds() {
    const sliceearbuds = products.slice(40, 44)
    return (
        <Link to='/earbuds' style={{ textDecoration: 'none' }}>
            <div className='main'>
                {
                    sliceearbuds.map((e) => (
                        <div key={e.id} className='data1'>
                            <div className='dataimage'>
                                <img src={e.images} alt={e.brand} />
                            </div>
                            <div className='p-2 text-dark'>
                                <h6>{e.brand}</h6>
                                <h5>{e.price}/-</h5>
                                <p className='rating'>{e.rating}<FaStar /></p>
                                <small>{e.description.slice(0, 44)}</small>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='buttonplace'>
                <button className='btn btn-link'>Click More ...</button>
            </div>
        </Link>
    )
}

export default Sliceearbuds
