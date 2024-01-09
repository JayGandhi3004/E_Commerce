import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GET_FINAL_PROGRESS } from '../redux/cart/action/action'

const Navbar = () => {

    const dispatch=useDispatch()
    const data=useSelector((state)=>state.cartReducer)

    useEffect(()=>{
        dispatch({type:GET_FINAL_PROGRESS})
    },[])

    return (
        <div>

            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a className="flex items-center">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">LayersShop</span>
                    </a>
                    <div className="flex md:order-2">
                        <p className='pbtn'>{data.final.length}</p>
                        <Link to={"/cart"}><button type="button" className="text-white font-medium rounded-lg text-xl px-4 py-2 text-center mr-3 md:mr-0"><i className="fa-solid fa-cart-shopping"></i></button></Link>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar
