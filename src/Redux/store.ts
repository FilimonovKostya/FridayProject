import {combineReducers, createStore} from "redux";
import {loginReducer} from "./reducers/loginReducer";
import {passwordReducer} from "./reducers/passwordReducer";
import {registrationReducer} from "./reducers/registrationReducer";
import {profileReducer} from "./reducers/profileReducer";

const rootReducer = combineReducers({
    login: loginReducer,
    password: passwordReducer,
    registration:registrationReducer,
    profile:profileReducer
})

export const store = createStore(rootReducer)

export type RootStateType = ReturnType<typeof rootReducer>