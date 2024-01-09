import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_FINAL_PROGRESS, GET_FINAL_PROGRESS, UPDATE_FINAL_PROGRESS } from '../redux/cart/action/action';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.cartReducer)


  useEffect(() => {
    dispatch({ type: GET_FINAL_PROGRESS })
  }, [])

  // console.log(data);

  const deletedata = (id) => {
    console.log(id);
    dispatch({ type: DELETE_FINAL_PROGRESS, payload: id })
    // alert("Are you confirm Delete Layer Skin ?")
  }

  const plus = (e) => {
    dispatch({ type: UPDATE_FINAL_PROGRESS, payload: { ...e, qty: e.qty += 1 } })
  }

  const minus = (e) => {
    dispatch({ type: UPDATE_FINAL_PROGRESS, payload: { ...e, qty: Math.max(1, e.qty -= 1) } })
  }

  let totalAmount = 0;

  data.final.map((e, index) => {
    //  Calculate the total for each item
    const itemTotal = e.qty * e.price;

    // Add the item total to the overall total
    totalAmount += itemTotal;
    console.log(totalAmount);
  })

  return (
    <div>
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{data.final.length}</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
            </div>
            <div>
              {
                data.final.map((e, index) => {
                  return (
                    <div>
                      <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                        <div className="flex w-2/5">
                          <div className="w-20">
                            <img className="h-24" src={e.image} alt />
                          </div>
                          <div className="flex flex-col justify-between ml-4 flex-grow">
                            <span className="font-bold text-sm">{e.name}</span>
                            <span className="text-indigo-500 font-semibold text-xs">{e.category}</span>
                            <span onClick={() => deletedata(e.id)} className="cursor-pointer font-semibold hover:text-red-500 text-gray-500 text-xs"><i class="fa-solid fa-trash"></i></span>
                          </div>
                        </div>
                        <div className="text-center w-1/5 font-semibold text-sm">
                          <button onClick={() => minus(e)} className='w-[30px] mr-1.5 border-2 rounded bg-violet-100'><i className='fa fa-minus'></i></button>
                         {console.log(e)}
                          <input className='w-[64px] border-2 text-center mr-1.5 rounded border-[#000]' value={e.qty} type='text' disabled />
                          <button onClick={() => plus(e)} className='w-[30px] border-2 rounded bg-violet-100'>
                            <i className='fa fa-plus'></i></button>
                        </div>
                        <span className="text-center w-1/5 font-semibold text-sm">₹ {e.price}</span>
                        <span className="text-center w-1/5 font-semibold text-sm">₹ {e.qty * e.price}</span>
                      </div>

                    </div>
                  )
                })
              }
              <Link to={"/"}>
                <a className="flex font-semibold text-indigo-600 text-sm mt-10">
                  <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                  Continue Shopping
                </a>
              </Link>
            </div>
          </div>
          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">{data.final.length}</span>
              <span className="font-semibold text-sm">₹ {totalAmount}</span>
            </div>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>₹ {totalAmount}</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Cart

