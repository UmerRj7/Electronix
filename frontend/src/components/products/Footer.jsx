import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const Footer = () => {
  return (
    <footer>
      <Box bgcolor="text.primary" color="white" py={6}>
        <Container maxWidth="lg" style={{ paddingLeft: 180 }}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} pb={1}>
                <Typography variant="subtitle1" style = {{fontWeight:'bolder'}} >Help</Typography>
              </Box>
              <Box>
                <Link href="/login" color="inherit">
                  Login
                </Link>
              </Box>
              <Box>
                <Link href="/joinUs" color="inherit">
                  Register
                </Link>
              </Box>
              <Box>
                <Link href="/myProducts" color="inherit">
                  Add To Cart
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} pb={1}>
                <Typography variant="subtitle1" style = {{fontWeight:'bolder'}}>Account</Typography>
              </Box>
              <Box>
                <Link href="/myBlog" color="inherit">
                  Checkout
                </Link>
              </Box>
              <Box>
                <Link href="/myCart" color="inherit">
                  Cart
                </Link>
                {/* style={{ color: 'black' }} */}
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} pb={1}>
                <Typography variant="subtitle1" style = {{fontWeight:'bolder'}}>Messages</Typography>
              </Box>
              <Box>
                <Link href="/myUpdates" color="inherit">
                  Products
                </Link>
              </Box>
              <Box>
                <Link href="/myTable" color="inherit">
                  Add Image Product
                </Link>
              </Box>
              <Box>
                <Link href="/myProductImages" color="inherit">
                  Image Products
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box mt={6} textAlign="center" style={{ paddingLeft: 320 }} pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            <Typography variant="body2" color="inherit">
              &copy; RJ Electronics PL {new Date().getFullYear()}
            </Typography>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
