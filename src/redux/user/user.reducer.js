import { bindActionCreators } from "redux";
import {UserActionTypes} from './user.types';

const INITIAL_STATE = {
    currentUser : null
}
const userReducer = (state = INITIAL_STATE ,reducer,action) =>{
    switch(bindActionCreators.type){
        case 'SET-CURRENT-USER':
            return {
                ...state,
                currentUser : action.payload
            };

        default: 
        return state;
    }

}
export default userReducer;
