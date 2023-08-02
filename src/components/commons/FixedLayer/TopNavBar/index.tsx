import {
  Avatar,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Slide,
  Stack,
  Tooltip,
  Typography,
  useScrollTrigger,
} from '@mui/material';

import Link from 'next/link';
import React, { useEffect } from 'react';
import s from './topnav.module.scss';
import { ChevronLeft, Logout, MenuBookRounded } from '@mui/icons-material';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { usePopover } from '@/hooks/use-popover';
import { useRecoilState, useRecoilValue } from 'recoil';
import bookStoreState from '@/store';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

export function HideOnScroll(props: Props) {
  const { children, window } = props;
  const { isPullToRefresh } = useRecoilValue(bookStoreState);

  console.log('state: ', isPullToRefresh);

  const trigger = useScrollTrigger({
    target: window != null ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger && !isPullToRefresh}>
      {children}
    </Slide>
  );
}

const navVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const navTransition = {
  duration: 1,
  ease: [0.6, 0.01, 0, 0.9],
  delay: 1,
};

export default function TopNavBar({ pageProps }: any) {
  // console.log('data: ', session, isTalent);
  const { navTitle } = useRecoilValue(bookStoreState);
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HideOnScroll>
      <div style={{ width: '100%', display: 'flex' }}>
        <motion.nav
          className={clsx([s.container])}
          variants={navVariants}
          transition={navTransition}
        >
          {router.pathname === '/' ? (
            <Link href="/">
              <Stack
                direction="row"
                alignItems="center"
                spacing={1.5}
                className={s.logo_stack}
              >
                <div className={s.logo}>
                  <IconButton>
                    <MenuBookRounded />
                  </IconButton>
                </div>
                <Typography variant="body1">Book Store</Typography>
              </Stack>
            </Link>
          ) : (
            <Link href="/">
              <IconButton>
                <ChevronLeft fontSize="large" />
              </IconButton>
            </Link>
          )}

          <Typography variant="h5">
            {navTitle ? navTitle : 'Book Store'}
          </Typography>

          <Link href="/">
            <Button variant="outlined">Login</Button>
          </Link>

          <Menu
            elevation={0}
            id="menu-appbar"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            className={s.menu}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Divider sx={{ my: 0.5 }} />
          </Menu>
        </motion.nav>
      </div>
    </HideOnScroll>
  );
}
