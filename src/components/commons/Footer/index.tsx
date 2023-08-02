import React from 'react';
import s from './footer.module.scss';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.copyright}>
          <Typography variant="body1">
            © {new Date().getFullYear()}, All rights reserved
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
