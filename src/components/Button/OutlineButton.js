import React from 'react';
import './OutlineButton.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import EastIcon from '@mui/icons-material/East';

const OutlineButton = () => {
  return (
    <div>
      <Stack spacing={2} direction='row'>
        <Button variant='outlined' endIcon={<EastIcon />} className='custom-button'>
          Know More
        </Button>
      </Stack>
    </div>
  );
};

export default OutlineButton;
