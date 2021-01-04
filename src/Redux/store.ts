import {combineReducers, createStore} from "redux";
import {loginReducer} from "./reducers/loginReducer";

const rootReducer = combineReducers({
    login: loginReducer
})

export const store = createStore(rootReducer)

export type RootStateType = ReturnType<typeof rootReducer>