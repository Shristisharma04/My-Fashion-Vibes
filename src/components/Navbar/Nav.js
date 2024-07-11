import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { searchDresses } from '../../ApiService/unsplashService';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [options, setOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm) {
      const fetchPhotos = async () => {
        try {
          const results = await searchDresses(searchTerm);
          setOptions(results);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      };
      fetchPhotos();
    }
  }, [searchTerm]);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='fixed' sx={{ backgroundColor: '#fff', color: '#000' }}>
          <Toolbar>
          
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Fashion Vibes
            </Typography>

            <Stack spacing={3} sx={{ width: 300, paddingRight: '5px' }}>
              <Autocomplete
                multiple
                id='tags-standard'
                options={options}
                getOptionLabel={(option) => option.title}
                filterOptions={(x) => x}
                onInputChange={(event, newInputValue) => {
                  setSearchTerm(newInputValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} variant='standard' label='Search Here' placeholder='Favorite Dress' />
                )}
              />
            </Stack>

            {/* <Button color='inherit'>
              <Link to='/Product'>Product Detail</Link>{' '}
            </Button> */}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Nav;
