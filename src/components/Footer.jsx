import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <span className='line px-4 gap-2 my-2 fs-5'><i class="lni lni-youtube"></i></span>
            <span className='line px-4 gap-2 my-2 fs-5'><i class="lni lni-facebook-original"></i></span>
            <span className='line px-4 gap-2 my-2 fs-5'><i class="lni lni-linkedin-original"></i></span>
            <span className='line px-4 gap-2 my-2 fs-5'><i class="lni lni-instagram-original"></i></span>
            <span className='line px-4 gap-2 my-2 fs-5'><i class="lni lni-twitter-filled"></i></span>
        </div>
        <div className='footer-1  px-4 my-4'>
            <span>Terms of services</span>
            <span>Privacy policy</span>
        </div>
        <div className='footer-2'>
            <p>Copyright 2021 @ Peddle Technologies. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer