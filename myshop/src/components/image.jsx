import React, { useState, useEffect } from 'react'
import Loading from './../loading';
import Table from './Table';



const MyProduct = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/images');
             setLoading(false);
            setUsers(await response.json());
        } catch (error) {
            setLoading(false);
            console.log("my error is "+ error);
        }
    }

    // function deleteUser(_id)
    // {
    //     fetch(`http://localhost:4000/api/users/${_id}`,{
    //         method:'DELETE'
    //     }).then((result)=>{
    //         result.json().then((resp)=>{
    //             console.warn(resp)
    //             getUsers();
    //         })
    //     })
    // }

    useEffect(() => {
        getUsers();
    }, []);

    if (loading) {
        return <Loading />
    }

    return ( 
    <div id="art">
        <Table />
        {
            users.map((cur,)=>{
                return(
                    
                    <div id="container2" >
                        <h1 class="text-center" style={{color:'white'}}>{cur.name}</h1>
                        <img src= {"upload/" + cur.image} alt="Girl in a jacket" id="upload"></img>
                    </div>
                    
                )
            })
        }

            
    </div>
     );
}
 
export default MyProduct;