import React from 'react'
import { Link } from 'react-router-dom'

export default function Content() {
  return (
    <div className='blogs-content'>
        <h1 className='blogs-content__heading'>
            AhaZ was created to inpire you to be the best version of yourself. Our goal is to bring you clothes that blanket you  in quality, design and comfort
        </h1>
        <div className='blogs-content__text-box'>
            <p className="blogs-content__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi quo tempore provident nostrum sequi illum unde natus! Veniam quas quo perferendis quod doloribus, nulla suscipit. Quae repellat voluptatibus laborum illum.</p>
            <p className="blogs-content__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi quo tempore provident nostrum sequi illum unde natus! Veniam quas quo perferendis quod doloribus, nulla suscipit. Quae repellat voluptatibus laborum illum.</p>
        </div>
        <div className="blogs-content__images">
            <img className="blogs-content__image" style={{border: '2px solid #000'}} src="https://rukminim1.flixcart.com/image/532/598/kzegk280/t-shirt/n/h/l/s-t285hs-as7whdnmt-eyebogler-original-imagbfyge6kae4xg.jpeg?q=50" alt="image is not available" />
            <div className='blogs-content__inner'>
                <img className='bordered' src='https://rukminim1.flixcart.com/image/432/498/kzegk280/t-shirt/n/h/l/s-t285hs-as7whdnmt-eyebogler-original-imagbfyge6kae4xg.jpeg?q=50' alt='image is not available' />
                <p className='blogs-content__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed libero assumenda voluptatum illo mollitia ducimus earum, hic exercitationem. Eaque a quas in aliquid dignissimos quaerat sit suscipit. Perferendis, quidem sint.</p>
                <Link to='/about'><button className='blogs-content__btn'>About Us</button></Link>
            </div>
        </div>
    </div>
  )
}
