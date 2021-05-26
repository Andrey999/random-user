import { combineReducers, createStore, applyMiddleware, compose, Store } from 'redux';
import { appReducer } from './reducers/app';
import { cartPageReducer } from './reducers/cartPage';
import { favoritesPageReducer } from './reducers/favorites';
import { authPageReducer } from './reducers/auth';
import { IAppInitialStateType, ICartPageInitialStateType, IFavoritesPageInitialStateType, IAuthPageInitialStateType } from './types'
import thunkMiddleware from 'redux-thunk';

// @ts-ignore
let composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    app: appReducer,
    cartPage: cartPageReducer,
    favorites: favoritesPageReducer,
    auth: authPageReducer
})

export interface AppState {
    app: IAppInitialStateType
    cartPage: ICartPageInitialStateType
    favorites: IFavoritesPageInitialStateType,
    auth: IAuthPageInitialStateType
}

export const store: Store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)
    ));