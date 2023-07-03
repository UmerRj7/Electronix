import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import  Axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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



export default function SignIn() {

  const navigate = useNavigate()
	const url = "http://localhost:4000/api/users/login";
	const [data,setData] = useState({
		email:"",
		password:""
    })

    // const handleSubmit = async(e) => {
    //   e.preventDefault();
    //     try{
    //         await Axios.post(url, {
    //             email: data.email,
    //             password: data.password,
    //         });
    //         localStorage.setItem('token',data.token)
    //         navigate("/");
    //     }catch(error){
    //         console.log(error);
    //     }
    // }

    function submit(e){

      e.preventDefault();
      
      Axios.post(url, {
        email: data.email,
        password: data.password
      })	
      .then(res=>{
        console.log(res.data);
        //alert("success");
        localStorage.setItem('token',res.data.token)
        navigate('/')
      })
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
           
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={(e) =>submit(e)} noValidate sx={{ mt: 1 }}>
            <TextField    onChange={(e) =>handle(e)}
              margin="normal"
              required
              fullWidth
              id="email"
              value={data.email}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField    onChange={(e) =>handle(e)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={data.password}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             <a  style={{color:"white"}}> Sign In</a>
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgot" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/JoinUs" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}