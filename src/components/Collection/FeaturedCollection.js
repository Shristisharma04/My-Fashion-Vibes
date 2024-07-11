import React, { useEffect, useState } from 'react';
import './FeaturedCollection.css';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../ApiService/unsplashService';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const FeaturedCollection = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await fetchProducts();
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProducts();
  }, []);

  return (
    <div>
      <h1 className='collection-heading' data-aos='fade-right'>
        FEATURED COLLECTION
      </h1>
      <Box sx={{ width: '100%', marginTop: '5%' }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {products.map((product) => (
            <Grid item lg={3} md={4} sm={6} key={product.id} onClick={() => navigate(`/productDetails/${product.id}`)}>
              
                <Item className='Item'>
                  <img
                    src={product.urls.small}
                    alt={product.alt_description}
                    style={{ width: '100%', height: '250px', borderRadius: '10px' }}
                  />
                  <h3>{product.alt_description || 'No description'}</h3>
                  <p>{product.user.name}</p>
                </Item>
             
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default FeaturedCollection;
