import React from 'react';
import './About.css';
import OutlineButton from '../Button/OutlineButton';
import aboutModel from '../../assets/aboutModel.jpg';

const About = () => {
  return (
    <div>
      <div className='about-container'>
        <h1 data-aos='fade-right'>Great Style For Everyone</h1>
        <p>
          The challenge of shopping for quality, lasting pieces online is always the same: finding items that feel right
          and match your exact size and body type.The product description is detailed, listing specifics like length,
          neckline, adjustable straps, lining, fit, and fabric type in the form of bullet points.
        </p>
      </div>

      <div className='about-info'>
        <div className='about-img'>
          <img src={aboutModel} alt='frame' />
        </div>
        <div className='about-content'>
          <h1>Discover Your Personal Style and the Confidence That Comes with It.</h1>
          <p>
            Indulge in our enchanting collection, where elegance meets beauty. Our dresses are meticulously crafted to
            adorn every woman with sophistication and allure. Discover timeless allure and exquisite style with us.
          </p>
          <OutlineButton />
        </div>
      </div>
    </div>
  );
};

export default About;
