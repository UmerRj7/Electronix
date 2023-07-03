import React from "react";
import Endpannel from "./products/Footer";
import JsonData from './Raw_Data.json'


function JsonDataDisplay(){

    

    const DisplayData=JsonData.map(
        (info)=>{
            return(
                
                <div >
                <div id="container" class="card" >
                    <img id="image" class="card-img-top" src={info.Image} alt="Card image cap"></img>
                <div id="bound" class="card-body">
                <h5 class="card-title">{info.Title}</h5>
                <p class="card-text">{info.Text}</p>
                <p class="card-text">{info.Next}</p>
                <a href="#" class="btn btn-primary">Add To Cart</a>
                </div>
                </div>
                </div>
            )
        }
    )
  
    return(
        <div>
            <table class="table table-striped">
                <thead>
                
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                   
              <Endpannel />
             
                    
                </tbody>
            </table>
             
        </div>
    )
  }
  
  export default JsonDataDisplay;
  