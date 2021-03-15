import { userReducer } from "react";
import {UserActionTypes} from './user.types';
export const setCurrentUser = user =>({
    type :UserActionTypes.SET_CURRENT_USER,
    payload : user
})