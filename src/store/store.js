import createSagaMiddleware from 'redux-saga';
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// import { rootSaga } from "./rootSaga";
import loginReducer from "../slice/loginFormSlice"


const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    login: loginReducer,
});

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({ thunk: false }),
        sagaMiddleware,
    ],
});
// sagaMiddleware.run(rootSaga);

window.store = store;

export default store;