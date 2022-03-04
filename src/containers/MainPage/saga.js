import {all, takeLatest, call, put} from 'redux-saga/effects';
import  MainPageService  from './service';
import * as actions from './actions';
import mapMainPageData from './helpers'


export function* getMainPageDataSaga(){
    try{
const response = yield call(MainPageService.getMainPageData);
const films = response.data?.films;
const mappedData = mapMainPageData(response.data)
mappedData.films=[]; 
for (let i=0; i<films.length; i++){
    mappedData.films.push((yield call(MainPageService.getFilms, films[i])).data.title);
}
console.log("mappedData",mappedData);
yield put(actions.getMainPageData.success(mappedData))
    } catch(error){

    };
}
export function* testSaga(){}

export function*  mainPageWatcherSaga(){
yield all([
    takeLatest(actions.getMainPageData.REQUEST, getMainPageDataSaga),
    takeLatest('TEST_ACTION',testSaga)
])
}