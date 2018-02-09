import {combineReducers} from 'redux';
import SampleReducer from "./SampleReducer";
import UserReducer from "./secure";

const RootReducer = combineReducers(Object.assign({},
    SampleReducer,
    UserReducer
));

export default RootReducer;