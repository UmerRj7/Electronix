import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import  Axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function AddProduct() {

  const navigate = useNavigate()
	const url = "http://localhost:4000/api/products/register";
  //const [price, setEmail] = useState("");
  //const [password, setPassword] = useState("");
	const [data,setData] = useState({
		    name:"",
        price:"",
	})

  const handleSubmit = async(e) => {
    e.preventDefault();
    /*const data = new FormData(event.currentTarget);
    console.log({
      price: data.get('price'),
      password: data.get('password'),*/
      Axios.post(url, {
        name: data.name,
        price: data.price,
    })
    try{
      await Axios.post(`http://localhost:4000/api/products/register`, {
          
      });
      
  }catch(error){
    navigate("/");
      console.log(error);
  }
  }
    function handle(e){
      const newData = {...data}
      newData[e.target.id] = e.target.value
      setData(newData)
      console.log(newData);
    }
    


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'Red' }}>
            
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Product
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField  onChange={(e) =>handle(e)}
                  required
                  fullWidth
                  id="name"
                  label="Product Name"
                  name="name"
                  //autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField   onChange={(e) =>handle(e)}
                  required
                  fullWidth
                  id="price"
                  label="Price"
                  name="price"
                  //autoComplete="email"
                />
              </Grid>
              
             
            </Grid>
            <Button onClick={ ()=>{
            alert("success");
          } }
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ADD Product
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/mycart" variant="body2">
                 VIEW CART
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}