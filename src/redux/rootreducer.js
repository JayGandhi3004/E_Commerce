import { combineReducers } from "redux";
import cartReducer from "./cart/reducer/reducer";


const rootReducer = combineReducers({
    cartReducer,
})


export default rootReducer
