import React from 'react'
import { products } from '../data/ProductsData'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa6";

function Slicemobile() {
  const slicemobile = products.slice(0, 4)
  return (
    <Link to='/mobiles' style={{ textDecoration: 'none' }}>
        <div className="main">
          {
            slicemobile.map((e) => (
              <div key={e.id} className='data1'>
                <div className='dataimage'>
                  <img src={e.images} alt={e.brand} />
                </div>
                <div className='p-2 text-dark'>
                  <h6>{e.brand}</h6>
                  <h5>{e.price}/-</h5>
                  <p className='rating'>{e.rating}<FaStar /></p>
                  <small>{e.description.slice(0, 50)}</small>
                </div>
              </div>
            ))
          }
        </div>
        <div className="buttonplace">
          <button className='btn btn-link'>click more...</button>
        </div>
      </Link>
  )
}

export default Slicemobile
