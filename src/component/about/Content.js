import React from 'react'

export default function Content() {
  return (
    <div className='about-content'>
        <div className="about-content__video-block">
            <video className='about-content__video bordered' width="80%" src="https://www.videvo.net/video/blue-sky-and-clouds-timelapse/2299/" controls autoPlay></video>          
            <div className="about-content__benefits">
                <span>Free shipping</span>  
                <span className='marked'>3 years warranty</span>
                <span className='marked'>Secure payment</span>
            </div>
        </div>
        <div className='about-content__inner'>
            <div className='about-content__box'>
                <p className='about-content__text'>Want some news</p>
                <h1 className='about-content__caption'>Get in Touch</h1>
                <p className='about-content__desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse hic obcaecati quis nesciunt iure iste! Nesciunt nulla consectetur dolorum itaque. Repellendus quos omnis aut quibusdam et veritatis laborum in sint.</p>
                <div className='about-content__input-box'>
                    <input placeholder='Enter your email address' className='about-content__input' type='text'/>
                    <i class="bi bi-arrow-up-right about-content__send-btn"></i>
                </div>
            </div>
            <img className='bordered' src="https://rukminim1.flixcart.com/image/432/498/kzegk280/t-shirt/n/h/l/s-t285hs-as7whdnmt-eyebogler-original-imagbfyge6kae4xg.jpeg?q=50" alt="image is not available" />
        </div>
        <div className="about-content__follow">
            <a href=''>Follow us on Instagram</a>
            <a href=''>Follow us on Instagram</a>
            <a href=''>Follow us on Instagram</a>
        </div>
        <div className="about-content__footer">
            <div className='about-content__footer-main'>
                <div>
                    <h1 className='about-content_footer-logo'>AhaZ.</h1>
                    <p className='about-contet__footer-desc'>Lorem ipsum dolor, sit amet</p><br/>
                    <div className="about-content__footer-social">
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-twitter"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                    </div>
                </div>
                <div className='about-content__footer-location'>
                    <h2 className='about-content__footer-heading'>Location</h2>
                    <p>767 5th Street</p>
                    <br></br>
                    <p>21st Floor, New York, USA</p>
                </div>
                <div className='about-content__footer-links'>
                    <h2 className='about-content__footer-heading'>Links</h2>
                    <a className='about-content__footer-link' href="">About Us</a>
                    <a className='about-content__footer-link' href="">Our Sports</a>
                    <a className='about-content__footer-link' href="">New</a>
                    <a className='about-content__footer-link' href="">Contact Us</a>
                </div>
                <div className="about-content__footer-legal">
                    <h2 className='about-content__footer-heading'>Legal</h2>
                    <a className='about-content__footer-link' href="">Privacy Policy</a>
                    <a className='about-content__footer-link' href="">Terms of Conditions</a>
                </div>
                </div>
            <div/>
            <p>@AhaZ. 2022. All rights reserved.</p>
        </div>
    </div>
  )
}
