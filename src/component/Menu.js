import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

export default function Menu() {
  const [bmenu, setBmenu] = useState('none');

  useEffect(()=>{
    document.querySelector('.menu__link').focus()
  }, [])

  return (
    <div className='menu'>
        <div className='menu__navbar'>
            <Link to="/" className='menu__link'>Home</Link>
            <Link to="/about" className='menu__link'>About Us</Link>
            <Link to="/shop" className='menu__link'>Shop</Link>
            <Link to="/blogs" className='menu__link'>Blogs</Link>
        </div>
        <div className='menu__title'>
            <h1>AhaZ.</h1>
        </div>
        <div className='menu__cart-box'>
            <span className='menu__cart-icon'><i className="bi bi-bag-check-fill menu__cart"></i></span>
            <span className='menu__card-text'>Add to Cart(0)</span>
            <i onClick={()=>setBmenu("flex")} class="bi bi-list menu__menu-btn"></i>
            <div style={{display: bmenu}} className='menu__burger-menu'>
              <div className='menu__exit'>
                <i onClick={()=>setBmenu("none")} class="bi bi-box-arrow-right menu__exit-btn"></i>
              </div>
              <Link onClick={()=>setBmenu("none")} to="/" className='menu__link'>Home</Link>
              <Link onClick={()=>setBmenu("none")} to="/about" className='menu__link'>About Us</Link>
              <Link onClick={()=>setBmenu("none")} to="/shop" className='menu__link'>Shop</Link>
              <Link onClick={()=>setBmenu("none")} to="/blogs" className='menu__link'>Blogs</Link>
            </div>
        </div>
    </div>
  )
}
