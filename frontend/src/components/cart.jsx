import React, { useState, useEffect } from 'react'
import Loading from './../loading';

const Cart = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProducts = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/products');
             setLoading(false);
            setProducts(await response.json());
        } catch (error) {
            setLoading(false);
            console.log("my error is "+ error);
        }
    }

    function deleteProduct(_id)
    {
        fetch(`http://localhost:4000/api/products/${_id}`,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
                getProducts();
            })
        })
    }

    useEffect(() => {
        getProducts();
    }, []);

    if (loading) {
        return <Loading />
    }

    return ( 
        <section class="pt-5 pb-5">
        <div class="container">
          <div class="row w-100">
              <div class="col-lg-12 col-md-12 col-12">
                  <h3 class="display-5 mb-2 text-center">Shopping Cart</h3>
                  <p class="mb-5 text-center">
                      <i class="text-info font-weight-bold">3</i> items in your cart</p>
                  <table id="shoppingCart" class="table table-condensed table-responsive">
                      <thead>
                          <tr>
                              <th >Product</th>
                              <th >Price</th>
                              <th >Quantity</th>
                              <th ></th>
                          </tr>
                      </thead>
                      <tbody>

                      {
            products.map((curElem,)=>{
                return(
                    <tr>
                              <td data-th="Product">
                                  <div class="row">
                                      <div class="col-md-3 text-left">
                                          <img src="https://via.placeholder.com/250x250/5fa9f8/ffffff" id="placeholder" alt="" class="img-fluid d-none d-md-block rounded mb-2 shadow " />
                                      </div>
                                      <div class="col-md-9 text-left mt-sm-2">
                                          <h4>{curElem.name}</h4>
                                          <p class="font-weight-light">Brand &amp; Name</p>
                                      </div>
                                  </div>
                              </td>
                              <td data-th="Price">{curElem.price}</td>
                              <td data-th="Quantity">
                                  <input type="number" class="form-control form-control-lg text-center" value="1" />
                              </td>
                              <td class="actions" data-th="">
                                  <div class="text-right">
                                      <button class="btn btn-white border-secondary bg-white btn-md mb-2">
                                          <i class="fas fa-sync"></i>
                                      </button>
                                      <button class="btn btn-white border-secondary bg-white btn-md mb-2"
                                       onClick={()=>deleteProduct(curElem._id)}>
                                          <i class="fas fa-trash"></i>
                                      </button>
                                  </div>
                              </td>
                          </tr>
                    
                      )
            })
        }

                          
                       
                      </tbody>
                  </table>
                  <div class="float-right text-right">
                      <h4>Subtotal:</h4>
                      <h1>Rs99.00</h1>
                  </div>
              </div>
          </div>
          <div class="row mt-4 d-flex align-items-center">
              <div class="col-sm-6 order-md-2 text-right">
                  <a href="/myBlog" class="btn btn-primary mb-4 btn-lg pl-5 pr-5">Checkout</a>
              </div>
              <div class="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
                  <a href="/myprouctsare">
                      <i class="fas fa-arrow-left mr-2"></i> Continue Shopping</a>
              </div>
          </div>
      </div>
      </section>
     );
}
 
export default Cart;