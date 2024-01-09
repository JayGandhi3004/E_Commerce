import { call, put } from "redux-saga/effects";
import { deleteCart, getCart, getFinalCart, postCart, updateCart } from "../../cart/api/api";
import { DELETE_FINAL_ERROR, DELETE_FINAL_SUCCESS, GET_CART_ERROR, GET_CART_SUCCESS, GET_FINAL_ERROR, GET_FINAL_SUCCESS, POST_CART_ERROR, POST_CART_SUCCESS, UPDATE_FINAL_ERROR, UPDATE_FINAL_SUCCESS } from "../../cart/action/action";
import swal from "sweetalert";

// get cart
export function* handleGetCart(action) {
    try {
        const res = yield call(getCart, action);
        const status = res.status;
        const data = res.data;
        if (status === 200) {
            yield put({ type: GET_CART_SUCCESS, data });
        } else {
            yield put({ type: GET_CART_ERROR, data });
        }
    } catch (e) {
        yield put({ type: GET_CART_ERROR, e });
    }
}

// post cart
export function* handlePostCart(action) {
    try {
        const res = yield call(postCart, action);
        const status = res.status;
        const data = res.data;
        if (status === 200 || status === 201) {
            swal({
                title: "The item added successfully",
                icon: "success",
                dangerMode: true,
            })
            yield put({ type: POST_CART_SUCCESS, data });
        } else {
            yield put({ type: POST_CART_ERROR, data });
        }
    } catch (e) {
        yield put({ type: POST_CART_ERROR, e });
    }
}


// final cart 
export function* handlefinalCart(action) {
    try {
        const res = yield call(getFinalCart, action);
        const status = res.status;
        const data = res.data;
        if (status === 200 || status === 201) {
            yield put({ type: GET_FINAL_SUCCESS, data });
        } else {
            yield put({ type: GET_FINAL_ERROR, data });
        }
    } catch (e) {
        yield put({ type: GET_FINAL_ERROR, e });
    }
}

// delete cart 
export function* handledeleteCart(action) {
    try {
        const res = yield call(deleteCart, action);
        const status = res.status;
        const data = res.data;
        if (status === 200 || status === 201) {
            swal({
                title: "The item delete successfully",
                icon: "success",
                dangerMode: true,
            })
            yield put({ type: DELETE_FINAL_SUCCESS, data });
        } else {
            yield put({ type: DELETE_FINAL_ERROR, data });
        }
    } catch (e) {
        yield put({ type: DELETE_FINAL_ERROR, e });
    }
}

// update cart 
export function* handleupdateCart(action) {
    try {
        const res = yield call(updateCart, action);
        const status = res.status;
        const data = res.data;
        if (status === 200 || status === 201) {
            yield put({ type: UPDATE_FINAL_SUCCESS, data });
        } else {
            yield put({ type: UPDATE_FINAL_ERROR, data });
        }
    } catch (e) {
        yield put({ type: UPDATE_FINAL_ERROR, e });
    }
}
