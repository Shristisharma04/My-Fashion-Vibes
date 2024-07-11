// import React from 'react';
// import './Product.css';
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import aboutModel from '../../assets/aboutModel.jpg';
// import Nav from '../../components/Navbar/Nav';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import FillButton from '../../components/Button/FillButton';
// import { Link } from 'react-router-dom';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// const Product = () => {
//   return (
//     <div>
//       <Nav />
//       <div className='product-detail-container'>
//         <Link to='/'>
//           <FillButton />
//         </Link>
//         <h1 className='product-detail-heading'>Product Details</h1>
//       </div>

//       <Box sx={{ width: '100%' }}>
//         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//           <Grid item lg={6} md={6}>
//             <Item className='product-detail-img-container'>
//               <img src={aboutModel} alt='model' className='product-detail-img' />{' '}
//             </Item>
//           </Grid>
//           <Grid item lg={6} md={6}>
//             <Item>
//               <h1 className='product-name'>Product Name</h1>
//               <h5>Product Price :Rs 1200.00</h5>
//               <p className='product-detail'>
//                 {' '}
//                 Vibes fabric minded, cuts conscious and embroidery sensitive, that’s its essence. Exclusively woven
//                 threads to strengthen its position in contemporary festivity culture.
//               </p>
//               <ul>
//                 <li>Raw silk 2.5 yard Trouser</li>
//                 <li>Trouser border 2 yard</li>
//                 <li>Embroidery Border Front and back</li>
//                 <li>yard Includes all accessories and lining</li>
//               </ul>

//               <Stack spacing={2} direction='row'>
//                 <Button variant='contained' className='buy-btn'>
//                   Buy Now
//                 </Button>
//               </Stack>
//             </Item>
//           </Grid>
//         </Grid>
//       </Box>
//     </div>
//   );
// };

// export default Product;
