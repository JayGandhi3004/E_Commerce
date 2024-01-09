import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_CART_PROGRESS, POST_CART_PROGRESS } from '../redux/cart/action/action';
import Navbar from './Navbar';

const Data = () => {

    const dispatch = useDispatch();

    const data = useSelector((state) => state.cartReducer)


    useEffect(() => {
        dispatch({ type: GET_CART_PROGRESS })
    }, [])

    console.log(data);



    const submit = (val) => {
        dispatch({ type: POST_CART_PROGRESS, payload: val })
        // console.log(val,"val");
    }

    return (
        <div>
            <Navbar />
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {
                            data.cart.map((e, index) => {
                                return (
                                    <div key={index}>

                                        <li>
                                            <a href="#" className="mt-8 group block overflow-hidden">
                                                <img src={e.image} alt className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]" />
                                                <div className="relative bg-white pt-3">
                                                    <h3 className="font-bold text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                                        {e.name}
                                                    </h3>
                                                    <p className="mt-2">
                                                        <span className="font-medium tracking-wider text-gray-900">₹ {e.price}</span>
                                                    </p>
                                                    <p className="mt-2">
                                                        <span className="font-semibold tracking-wider text-gray-900">{e.category}</span>
                                                    </p>
                                                </div>
                                            </a>
                                        </li>
                                        <a
                                            className="mt-2 group inline-block rounded-full bg-gradient-to-r from-[#272829] via-black-500 to-[#61677A] p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                                        >
                                            <span onClick={() => submit(e)}
                                                className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">Buy Now</span>
                                        </a>

                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
            </section >
        </div >
    )
}

export default Data
