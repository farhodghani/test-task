import React, { useEffect, useState } from 'react'
import Footer from './Footer'

export default function Content() {
  return (
    <>
    <div className='home-content'>
        <div className='home-content__col1'>
            <h1 className='home-content__caption'>Elegance is good taste, plus a dash of during.</h1>
            <button className='home-content__btn'>Now - Shop Now - Shop</button>
            <button className='home-content__arrow-box'>
              <i className="bi bi-arrow-down-short home-content__arrow-down"></i>
            </button>
        </div>
        <div className='home-content__col2'>
            <img className='home-content__sm-img bordered' alt='image is not available' src='https://rukminim1.flixcart.com/image/332/398/kzegk280/t-shirt/n/h/l/s-t285hs-as7whdnmt-eyebogler-original-imagbfyge6kae4xg.jpeg?q=50'/>
            <p className='home-content__desc'>i want to ludhfaldh ldfahldhf lasdhflajhdflak asdhfl alfashsfl awkdhflask jhfdalkj h hlfj akjhfl ahfg ahksj gfllh </p>
        </div>
        <div className='home-content__col3'>
            <img className='home-content__img bordered' alt='image is not available' src='https://rukminim1.flixcart.com/image/432/498/kzegk280/t-shirt/n/h/l/s-t285hs-as7whdnmt-eyebogler-original-imagbfyge6kae4xg.jpeg?q=50' />
        </div>
    </div>
    <Footer />
    </>
  )
}
