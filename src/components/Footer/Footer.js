import React from 'react'
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div>
      <div className='footer-area'>
              <div className='copyright'>Copyright © 2024 FashionVibes</div>
              <div className='social-icons'><FacebookIcon/> <InstagramIcon/></div>
      </div>
    </div>
  );
}

export default Footer