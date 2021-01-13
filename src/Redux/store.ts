import {applyMiddleware, combineReducers, createStore} from 'redux';
import {loginReducer} from './reducers/loginReducer';
import {registrationReducer} from './reducers/registrationReducer';
import {profileReducer} from './reducers/profileReducer';
import thunk from 'redux-thunk';
import {appReducer} from './reducers/appReducer';
import {passwordReducer} from './reducers/password-recucer';

const rootReducer = combineReducers({
    login: loginReducer,
    password: passwordReducer,
    registration:registrationReducer,
    profile:profileReducer,
    app:appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof rootReducer>