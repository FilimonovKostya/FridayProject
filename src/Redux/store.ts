import {applyMiddleware, combineReducers, createStore} from "redux";
import {loginReducer} from "./reducers/loginReducer";
import {registrationReducer} from "./reducers/registrationReducer";
import {profileReducer} from "./reducers/profileReducer";
import thunk from "redux-thunk";
import {passwordRecoveryReducer} from "./reducers/passwordRecovery-reducer";

const rootReducer = combineReducers({
    login: loginReducer,
    passwordRecovery: passwordRecoveryReducer,
    // createPassword: createNewPasswordReducer,todo:add this thunk!!!create and recover - different pages!
    registration:registrationReducer,
    profile:profileReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof rootReducer>