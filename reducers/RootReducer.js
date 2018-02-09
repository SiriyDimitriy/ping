import {combineReducers} from 'redux';
import SampleReducer from "./SampleReducer";

const RootReducer = combineReducers(Object.assign({},
    SampleReducer
));

export default RootReducer;