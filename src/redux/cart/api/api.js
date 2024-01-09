import axios from "axios"
import { BASE_URL, DELETE_CART_API, GET_API, GET_CART_API, POST_CART_API, UPDATE_CART_API } from "../../constant"


// get api
export const getCart = () => {
    return axios.get(BASE_URL + GET_CART_API).then((res) => {
        const data = res.data;
        const status = res.status;
        console.log(res.data);
        return {
            data, status
        }
    })
        .catch((err) => console.log(err))
}

//post api
export const postCart = (action) => {
    return axios.post(BASE_URL + POST_CART_API, action.payload).then((res) => {
        const data = res.data;
        const status = res.status;
        console.log(res.data, "this is post API");
        return {
            data, status
        }
    })
        .catch((err) => console.log(err))
}

// final api
export const getFinalCart = () => {
    return axios.get(BASE_URL + GET_API).then((res) => {
        const data = res.data;
        const status = res.status;

        return {
            data, status
        }
    })
        .catch((err) => console.log(err))
}

// delete api
export const deleteCart = (action) => {
    return axios.delete(BASE_URL + DELETE_CART_API + action.payload).then((res) => {
        const data = action.payload;
        const status = res.status;

        return {
            data, status
        }
    })
        .catch((err) => console.log(err))
}

// update api
export const updateCart = (action) => {
    return axios.put(BASE_URL + UPDATE_CART_API + action.payload.id , action.payload).then((res) => {
        const data = action.payload;
        const status = res.status;

        return {
            data, status
        }
    })
        .catch((err) => console.log(err))
}
