import React, { useEffect, useState } from 'react'

export default function Content() {

  return (
    <div className='shop-content'>
        <div className='shop-content__box'>
            <h1 className='shop-content__caption'>New In</h1>
            <div>
                <p className='shop-content__text'>Lorem get this done faster out time is limited so hurry up otherwise you would be loser did you understant me on not ok every thing is norm now we would get it done </p>
                <div className='shop-content__navbar'>
                    <a className='shop-content__link'>Hoddies</a>
                    <a className='shop-content__link shop-content__link--marked'>Jeans & Shirts</a>
                    <a className='shop-content__link'>T-shirts</a>
                    <a className='shop-content__link'>Jackets</a>
                </div>
            </div>
        </div>
        <div className='shop-content__images'>
            <div className="shop-content__holder">
                <img 
                    className='shop-content__image bordered' 
                    alt='image is not available' 
                    src="https://rukminim1.flixcart.com/image/332/398/kzegk280/t-shirt/n/h/l/s-t285hs-as7whdnmt-eyebogler-original-imagbfyge6kae4xg.jpeg?q=50" 
                />
                <div className='shop-content__name-cost'>
                    <p>AhaZ Shirts</p>
                    <p>$199</p>
                </div>
            </div>
            <div className="shop-content__holder">
                <img   
                    className='shop-content__image' 
                    alt='image is not available' 
                    src="https://rukminim1.flixcart.com/image/332/398/kzegk280/t-shirt/n/h/l/s-t285hs-as7whdnmt-eyebogler-original-imagbfyge6kae4xg.jpeg?q=50" 
                />
                <div className='shop-content__purchase'>
                    <i className="bi bi-bag-check-fill shop-content__cart"></i>
                </div>
            </div>
            <div className='shop-content__holder'>
                <img  
                    className='shop-content__image bordered' 
                    alt='image is not available' 
                    src="https://rukminim1.flixcart.com/image/332/398/kzegk280/t-shirt/n/h/l/s-t285hs-as7whdnmt-eyebogler-original-imagbfyge6kae4xg.jpeg?q=50" 
                />
                <div className='shop-content__name-cost'>
                    <span>AhaZ Shirts</span>
                    <span>$199</span>
                </div>
            </div>
            
        </div>

        <h1 className='shop-content__headline'>Featured Collections</h1>
        <p className='shop-content__desc'>Lorem ipsum dolor sit amet, consectetur something is going on here but i did not understand these things yet later i would be</p>
        
        <div className='shop-content__t-shirts'>
            <div className='shop-content__holder'>
                <img className='shop-content__image' alt='image is not available' src="https://rukminim1.flixcart.com/image/532/598/kzegk280/t-shirt/n/h/l/s-t285hs-as7whdnmt-eyebogler-original-imagbfyge6kae4xg.jpeg?q=50" />
                <p className='shop-content__name'>T-Shirts<i class="bi bi-arrow-up-right"></i></p>
            </div>
            <div className='shop-content__holder'>
                <img className='shop-content__image bordered' alt='image is not available' src="https://rukminim1.flixcart.com/image/382/448/kzegk280/t-shirt/n/h/l/s-t285hs-as7whdnmt-eyebogler-original-imagbfyge6kae4xg.jpeg?q=50" />
                <p className='shop-content__name'>Shirts<i class="bi bi-arrow-up-right"></i></p>
            </div>
        </div>
    </div>
  )
}
