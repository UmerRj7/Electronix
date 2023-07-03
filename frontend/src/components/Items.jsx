import React, { useState, useEffect } from 'react'
import Loading from './../loading';

// import GithubUsers from "./github/githubUsers";

const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/items');
             setLoading(false);
            setUsers(await response.json());
        } catch (error) {
            setLoading(false);
            console.log("my error is "+ error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    if (loading) {
        return <Loading />
    }

    return (
        <div>

          {
                users.map((curElem,)=>{
                return(
                <div className='container-fluid mt-5'>
                
                       
                    <div id="container" class="card" >
                    <img id="image" class="card-img-top" src={curElem.Image} alt="Card cap"></img>
                <div id="bound" class="card-body">
                <h5 class="card-title">{curElem.Title}</h5>
                <p class="card-text">{curElem.Text}</p>
                <p class="card-text">{curElem.Next}</p>
                <a href="/mycart" class="btn btn-primary">Add To Cart</a>
                </div></div>
                </div>
          

                )
            })
          }  
             
          
        </div>
            )
            
}

export default UseEffectAPI