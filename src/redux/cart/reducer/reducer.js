import { DELETE_FINAL_ERROR, DELETE_FINAL_PROGRESS, DELETE_FINAL_SUCCESS, GET_CART_ERROR, GET_CART_PROGRESS, GET_CART_SUCCESS, GET_FINAL_ERROR, GET_FINAL_PROGRESS, GET_FINAL_SUCCESS, POST_CART_ERROR, POST_CART_PROGRESS, POST_CART_SUCCESS, UPDATE_FINAL_ERROR, UPDATE_FINAL_PROGRESS, UPDATE_FINAL_SUCCESS } from "../action/action"

const initialstate = {
    cart: [],
    final: [],

    //get
    getcartProgress: false,
    getcartError: null,

    //post
    postcartProgress: false,
    postcartError: null,

    // cart data
    getfinalProgress: false,
    getfinalError: null,

    //delete
    deleteProgress: false,
    deleteError: null,

    DataIsLoded: false,
}



const cartReducer = (state = initialstate, action) => {
    switch (action.type) {
        case GET_CART_PROGRESS: {
            return {
                ...state,
                getcartProgress: true,
                getcartError: null,
                DataIsLoded: false,
            }
        }

        //get reducer
        case GET_CART_SUCCESS: {
            return {
                ...state,
                getcartProgress: false,
                getcartError: null,
                cart: action.data,
                DataIsLoded: true,
            }
        }


        case GET_CART_ERROR: {
            return {
                ...state,
                getcartProgress: false,
                getcartError: action.data,
                DataIsLoded: false,
            }
        }

        // post reducer
        case POST_CART_PROGRESS: {
            return {
                ...state,
                postcartProgress: true,
                postcartError: null,
                DataIsLoded: false,
            }
        }


        case POST_CART_SUCCESS: {
            return {
                ...state,
                postcartProgress: false,
                postcartError: null,
                final: state.final.concat(action.data),
                DataIsLoded: true,
            }
        }

        case POST_CART_ERROR: {
            return {
                ...state,
                postcartProgress: false,
                postcartError: action.data,
                DataIsLoded: false,
            }
        }

        // final reducer
        case GET_FINAL_PROGRESS: {
            return {
                ...state,
                getfinalProgress: true,
                getfinalError: null,
                DataIsLoded: false,
            }
        }

        case GET_FINAL_SUCCESS: {
            return {
                ...state,
                getfinalProgress: false,
                getfinalError: null,
                final: (action.data),
                DataIsLoded: true,
            }
        }

        case GET_FINAL_ERROR: {
            return {
                ...state,
                getfinalProgress: false,
                getfinalError: action.data,
                DataIsLoded: false,
            }
        }

        // delete reducer
        case DELETE_FINAL_PROGRESS: {
            return {
                ...state,
                getfinalProgress: true,
                getfinalError: null,
                DataIsLoded: false,
            }
        }


        case DELETE_FINAL_SUCCESS: {
            return {
                ...state,
                getfinalProgress: false,
                getfinalError: null,
                final: state.final.filter((e) => e.id !== action.data),
                DataIsLoded: true,
            }
        }


        case DELETE_FINAL_ERROR: {
            return {
                ...state,
                getfinalProgress: false,
                getfinalError: action.data,
                DataIsLoded: false,
            }
        }

        // UPDATE reducer
        case UPDATE_FINAL_PROGRESS: {
            return {
                ...state,
                getfinalProgress: true,
                getfinalError: null,
                DataIsLoded: false,
            }
        }


        case UPDATE_FINAL_SUCCESS: {
            return {
                ...state,
                getfinalProgress: false,
                getfinalError: null,
                final: state.final.map((e) => {
                    if (e.id === action.data.id) {
                        return {
                            ...e, ...action.data,
                        }
                    } else {
                        return e;
                    }
                }),
                DataIsLoded: true,
            }
        }


        case UPDATE_FINAL_ERROR: {
            return {
                ...state,
                getfinalProgress: false,
                getfinalError: action.data,
                DataIsLoded: false,
            }
        }


        default:
            return {
                ...state
            }
    }


}
export default cartReducer;
