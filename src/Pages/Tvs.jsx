import React from 'react'
import { products } from '../data/ProductsData'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import { FaStar } from "react-icons/fa6";

function Tvs() {
    const tvs = products.slice(60, 80)
    return (
        <>
            <Header />
            <div className="body">
                <div className='container'>
                    <div className='data'>
                        {
                            tvs.map(e => (
                                <Link to={`/tvs/${e.id}`} key={e.id} style={{ textDecoration: 'none' }}>
                                    <div className='data1'>
                                        <div className='dataimage'>
                                            <img src={e.images} alt={e.brand} />
                                        </div>
                                        <div className='p-2 text-dark'>
                                            <h6>{e.brand}</h6>
                                            <h5>{e.price}/-</h5>
                                            <p className='rating'>{e.rating}<FaStar /></p>
                                            <small>{e.description.slice(0, 42)}</small>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tvs
