import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Stack from '@mui/material/Stack';

const FillButton = () => {
  return (
    <div>
      {' '}
      <Stack direction='row' spacing={2}>
        <Button variant='contained' endIcon={<ArrowBackIcon />}>
         Back
        </Button>
      </Stack>
    </div>
  );
};

export default FillButton;
