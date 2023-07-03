import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from './../loading';
import './dashboard.css';
// import Endpannel from './products/Footer';


const Dashboard = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate("/Login")
        }
  },[])

    const getUsers = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/users');
             setLoading(false);
            setUsers(await response.json());
        } catch (error) {
            setLoading(false);
            console.log("my error is "+ error);
        }
    }

    function deleteUser(_id)
    {
        fetch(`http://localhost:4000/api/users/${_id}`,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
                getUsers();
            })
        })
    }

    useEffect(() => {
        getUsers();
    }, []);

    if (loading) {
        return <Loading />
    }

    return ( 
        <div class="container">
    <div class="table-responsive">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-xs-5">
                        <h2>User <b>Management</b></h2>
                    </div>
                    <div class="col-xs-7">
                        <a href="/JoinUs" class="btn btn-primary"><i class="material-icons">&#xE147;</i> <span>Add New User</span></a>
                        <a  type="button" onClick={()=>navigate(-1)} class="btn btn-primary"><i class="material-icons">&#xE24D;</i> <span>Back to:</span></a>						
                    </div>
                </div>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Avatar</th>
                        <th>Name</th>						
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
            users.map((curElem,)=>{
                return(
                    
                    
                      <tr>
                      <td><h6>o</h6></td>
                        <td><a href="/none"><img src="assets/images/items/2.png" class="avatar" alt="Avatar" /> </a></td>  
                      <td>{curElem.name}</td>
                      <td>{curElem.email}</td>
                      <td>{curElem.role}</td>
                      <td><span class="status text-success">&bull;</span> Active</td>
                      <td>
                    <a href="#" class="settings" title="Settings" data-toggle="tooltip"><i class="material-icons">&#xE8B8;</i></a>
                    <a  type="button" onClick={()=>deleteUser(curElem._id)} class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE5C9;</i></a>
                        </td>
                        </tr>
                  
                 
                )
            })
        }
                  
                </tbody>
            </table>
            <div class="clearfix">
                <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                <ul class="pagination">
                    <li class="page-item disabled"><a href="/none">Previous</a></li>
                    <li class="page-item"><a href="/none" class="page-link">1</a></li>
                    <li class="page-item"><a href="/none" class="page-link">2</a></li>
                    <li class="page-item active"><a href="/none" class="page-link">3</a></li>
                    <li class="page-item"><a href="/none" class="page-link">4</a></li>
                    <li class="page-item"><a href="/none" class="page-link">5</a></li>
                    <li class="page-item"><a href="/none" class="page-link">Next</a></li>
                </ul>
            </div>
        </div>
    </div>
    {/* <Endpannel />          */}
</div>
    
    );
}
 
export default Dashboard;