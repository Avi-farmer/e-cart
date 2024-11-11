import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  return (
    <div className='sidenav'>
      <ul className='navbar1'>
        <li>
          <Link className='text-decoration-none' to='/'>Home</Link>
        </li>
        <li>
          <Link className='text-decoration-none' to="/mobiles">Mobiles</Link>
        </li>
        <li>
          <Link className='text-decoration-none' to="/laptops">Laptops</Link>
        </li>
        <li>
          <Link className='text-decoration-none' to="/earbuds">Earbuds</Link>
        </li>
        <li>
          <Link className='text-decoration-none' to="/tvs">TV's</Link>
        </li>
      </ul>
      <Link to='/'><button className='btn btn-primary w-100'>LogOut</button></Link>
    </div>
  )
}

export default Sidenav
