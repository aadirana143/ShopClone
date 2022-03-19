import { combineReducers, createStore } from "redux";
import Cart from '../Redux/Reducer'


const RootReducer = combineReducers({
    choice: Cart
})
const Store = createStore(RootReducer)
export default Store