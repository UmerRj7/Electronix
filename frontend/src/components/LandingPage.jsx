import Blog from './Blog1';
import BlogB from './Blog2';
import BlogC from './Blog3';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from "react";



const LandingPage = () => {
        const navigate = useNavigate();
       
        useEffect(() => {
              if(!localStorage.getItem('token')){
                navigate("/Login");
              }
        },[])

        

    return ( 
    <div>
        <div id="TopDiv">
        <Button id="logout"
          onClick={ ()=>{
            localStorage.removeItem('token');
            window.location.reload(false);
          } } variant="contained" ><a href="#bit" style={{color:"white"}}>LOG-OUT</a></Button>



          <h1 id="MainTxt" >RJ ELECTRONICS</h1>
            </div>
            <div id="TopDiv2"> 
                <div id="divA">
                  <h1 id="textp">A PROMISE OF DEPENDABILITY</h1>
                  <p>Maytag is committed to delivering products that are built to stand the test of time. That’s why every new Maytag is backed by a decade of dependability thanks to a 10-year limited parts warranty.</p>
                  <Button variant="contained" >VIEW WARRANTIES</Button>
                </div>
                <div id="divB">
                <div><img src="assets/images/items/Capture.png" alt="Girl in a jacket" id="img10"/>
                </div>
                </div>
            </div>
            
            <div id="TopDiv2"> 
                <div id="divB">
                <img src="assets/images/posts/police.jpeg" alt="Girl in a jacket" id="img11"/>
                </div>

                <div id="divA">
                  <div id="divH">
                  <h1 id="textp">MEET THE MACHINE</h1>
                  <p>More than a hard-working appliance, Maytag is the dependable force that keeps your home running like a well-oiled ... well, you know.</p>
                  <Button variant="contained" >FIND OUT MORE</Button>
                  </div>
                 
                </div>    
            </div>

            <h1 id="CentrText">RECENT ARTICLES</h1>
            <div id="Maindiv">
              <div id="divI">
                        <Blog />
              </div>
              <div id="divII">
                        <BlogB />
              </div>
              <div id="divIII">
                        <BlogC />
              </div>
            </div><br></br>
            <div id="footer">
              {/* <Endpannel /> */}
              </div>
            
    </div>
     );
}
 
export default LandingPage;