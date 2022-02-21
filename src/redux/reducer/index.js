import {applyMiddleware, combineReducers, createStore} from "redux";
import testReducer from "./testReducer";

import createSagaMiddleware from 'redux-saga'
import {testWatcher} from "../saga/testSaga";


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    testReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(testWatcher)

