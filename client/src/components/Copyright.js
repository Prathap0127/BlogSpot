import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Copyright = () => {
  return (
    <Typography variant='subtitle1' color='text.secondary'>
      Copyright © 2023{' '}
      <Link to='/' color='inherit' style={{ color: '#34c4f2' }}>
        Mitteilen
      </Link>
    </Typography>
  );
};

export default Copyright;
