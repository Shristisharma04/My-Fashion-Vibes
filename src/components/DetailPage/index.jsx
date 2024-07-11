import React, { useState, useEffect } from 'react';
import '../../pages/ProductPage/Product.css';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../ApiService/unsplashService';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Nav from '../../components/Navbar/Nav';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FillButton from '../../components/Button/FillButton';
import { Link } from 'react-router-dom';

const DetailsPage = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const UNSPLASH_ACCESS_KEY = '-5vcjmyNPDTAZoYLDjyqA1GMaz67QQkeX8ct_RzyIhs';
  const { id } = useParams();
  console.log('id', id);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.unsplash.com/photos/${id}`, {
          headers: {
            Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
          },
        });
        console.log('response', response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Nav />
      <div className='product-detail-container'>
        <Link to='/'>
          <FillButton />
        </Link>
        <h1 className='product-detail-heading'>Product Details</h1>
      </div>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item lg={6} md={6}>
            <Item className='product-detail-img-container'>
              {product.urls && (
                <img src={product.urls.small} alt={product.alt_description} className='product-detail-img' />
              )}
            </Item>
          </Grid>
          <Grid item lg={6} md={6}>
            <Item>
              <h1 className='product-name'>{product.alt_description}</h1>
              <h5>Product Price :Rs 1200.00</h5>
              {/* <p className='product-detail'>{product.user.name}</p> */}
              <ul>
                <li>Raw silk 2.5 yard Trouser</li>
                <li>Trouser border 2 yard</li>
                <li>Embroidery Border Front and back</li>
                <li>yard Includes all accessories and lining</li>
              </ul>

              <Stack spacing={2} direction='row'>
                <Button variant='contained' className='buy-btn'>
                  Buy Now
                </Button>
              </Stack>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DetailsPage;
