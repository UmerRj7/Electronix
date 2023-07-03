import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const TopMenu = () => {
    return ( 
        <div>
            
               <ul id="navbar">
               
                    <li style={{display:"inline", padding:"40px"}}>
                        <Link to="/">Home</Link>
                    </li>               
                    
                    <li style={{display:"inline", padding:"40px"}}>
                         <Link to="/products">Products</Link>
                    </li> 

                    <li style={{display:"inline", padding:"40px"}}>
                         <Link to="/pathtoitems">Items</Link>
                    </li> 

                    <li style={{display:"inline", padding:"40px"}}>
                        <Link to="/Login">Sign-in</Link>
                    </li>               

                    <li style={{display:"inline", padding:"40px"}}>
                        <Link to="/contact">Pricing</Link>
                    </li>

                    <li style={{display:"inline", padding:"35px"}}>
                    <Button variant="contained" color="secondary"><Link to="/JoinUs">JOIN-US</Link></Button>
                    </li>               
               </ul>
               
        </div> 
    );
}
 
export default TopMenu;


