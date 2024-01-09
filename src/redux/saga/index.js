import { all } from "@redux-saga/core/effects";
import { deleteCartSaga, finalCartSaga, getCartSaga, postCartSaga, updateCartSaga } from "./root/rootcart";


export function* rootSaga() {
    yield all([getCartSaga(), postCartSaga(), finalCartSaga(), deleteCartSaga(), updateCartSaga()]);
}
