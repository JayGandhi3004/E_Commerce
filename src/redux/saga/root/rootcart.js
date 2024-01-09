import { takeLatest } from "redux-saga/effects";
import { handleGetCart, handlePostCart, handledeleteCart, handlefinalCart, handleupdateCart } from "../managecart/managecart";
import { DELETE_FINAL_PROGRESS, GET_CART_PROGRESS, GET_FINAL_PROGRESS, POST_CART_PROGRESS, UPDATE_FINAL_PROGRESS } from "../../cart/action/action";

// get
export function* getCartSaga() {
    yield takeLatest(GET_CART_PROGRESS, handleGetCart);
}

//post
export function* postCartSaga() {
    yield takeLatest(POST_CART_PROGRESS, handlePostCart);
}

// get final
export function* finalCartSaga() {
    yield takeLatest(GET_FINAL_PROGRESS, handlefinalCart);
}

// delete final
export function* deleteCartSaga() {
    yield takeLatest(DELETE_FINAL_PROGRESS, handledeleteCart);
}

// update final
export function* updateCartSaga() {
    yield takeLatest(UPDATE_FINAL_PROGRESS, handleupdateCart);
}
