import React from 'react';
import './Service.css';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import serviceImg from '../../assets/serviceImg.jpg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: '20px',
  boxShadow: 'none',
  textAlign: 'left',
}));

const Service = () => {
  return (
    <div>
      <div className='service-container'>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item lg={6} className='service-item'>
            <Item className='service-text'>
              <h2 data-aos='fade-right'>SHOP WITH US</h2>
              <h4>WHAT WE OFFER</h4>
              <p>We bring you gorgeous luxe and timeless products you can’t buy elsewhere.</p>

              <h4>UNIQUE DESIGNS</h4>
              <p>We work with talented fabric designers that create the most beautiful patterns just for us!</p>

              <h4>SOFTEST FABRICS</h4>
              <p>We only use the softest available and most durable fabrics.</p>

              <h4>EVERYDAY FASHION</h4>
              <p>Our all-quality stuff is well-recognized and loved by our prestigious customers.</p>
            </Item>
          </Grid>
          <Grid item lg={6} className='service-item'>
            <Item>
              <img src={serviceImg} alt='service' className='service-img' />
            </Item>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Service;
