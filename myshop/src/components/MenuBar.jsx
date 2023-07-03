import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//import Logout from './logout';





const MenuBar = () => {
    return ( 
    
        <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
         
          
          <Typography variant="h6" component="div"  sx={{ flexGrow: 3 }}>
          
          </Typography>
          <a href="/"><img id="logo1" src="assets/images/items/15.png" alt="Girl in a jacket"></img></a> 
          <Typography variant="h6" component="div" id="Txtsmall" sx={{ flexGrow: 1 }}>
          <a  href="/" style={{color:"white"}}>Home</a>
          </Typography>

          <Typography variant="h6" component="div" id="Txtsmall" sx={{ flexGrow: 1 }}>
          <a href="/products"  style={{color:"white"}}>Menu</a>
          </Typography>

          <Typography variant="h6" component="div" id="Txtsmall" sx={{ flexGrow: 1 }}>
          <a href="/mydashboard"  style={{color:"white"}}>Dashboard</a>
          </Typography>

          <Typography variant="h6" component="div" id="Txtsmall" sx={{ flexGrow: 1 }}>
          <a href="/pathtoitems"  style={{color:"white"}}>Items</a>
          </Typography>

          <Typography variant="h6" component="div" id="Txtsmall" sx={{ flexGrow: 1 }}>
          <a href="/contact" style={{color:"white"}}>Pricing</a>
          </Typography>

          <Typography variant="h6" component="div" id="Txtsmall" sx={{ flexGrow: 1 }}>
          <a href="/thisismyproduct" style={{color:"white"}}>Articles</a>
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <a href="/Login" style={{color:"white"}} id="Txtsmall">Sign-In</a>
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <a href="/mycart" style={{color:"white"}}><svg xmlns="http://www.w3.org/2000/svg" type="button" width="30" height="30" fill="white" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg></a>
          </Typography>

          <Button variant="contained" ><a href="/JoinUs" style={{color:"white"}}>JOIN-US</a></Button>
        </Toolbar>
      </AppBar>
    </Box>
    );
}
 
export default MenuBar;