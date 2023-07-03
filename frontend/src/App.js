
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ContactUs from './components/ContactUs';
import JoinUs from './components/JoinUs';
import ForgotPassword from './components/ForgotPassword';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Products from './components/products/product';
import MenuBar from './components/MenuBar';
import NotFound from './components/NotFound';
import Items from './components/Items';
import Checkout from './Checkout';
import Update from './update';
import Delete from './components/Delete';
import Cart from './components/cart';
import Dashboard from './components/Dashboard'
import Table from './components/Table';
import AddProduct from './components/addProduct';
import MyProduct from './components/image';
import Endpannel from './components/products/Footer';


function App() {
  return (
    <Router>
            <div>
            <h2><MenuBar /></h2>    
            
                <Routes>
                        <Route path="/contact" element={<ContactUs/>} />
                        <Route path="/products" element={<Products/>} />
                        <Route path="/NotFound" element={<NotFound/>} />
                        <Route path="/Login" element={<Login/>} />
                        <Route path="/" element={<LandingPage/>} />
                        <Route path="/JoinUs" element={<JoinUs/>} />
                        <Route path="/forgot" element={<ForgotPassword/>} />
                        <Route path="/myBlog" element={<Checkout/>} />
                        <Route path="/myUpdate" element={<Update/>} />
                        <Route path="/Deletemy" element={<Delete/>} />
                        <Route path="/pathtoitems" element={<Items />} />
                        <Route path="/mycart" element={<Cart />} />
                        <Route path="/mydashboard" element={<Dashboard />} />
                        <Route path="/myprouctsare" element={<AddProduct />} />
                        <Route path="/mytable" element={<Table />} />
                        <Route path="/thisismyproduct" element={< MyProduct />} />

                       </Routes>

                       <Endpannel />
            </div>
                

    </Router>
    
  );
}

export default App;
