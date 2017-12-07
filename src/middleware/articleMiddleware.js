import { takeEvery, put, call, all} from 'redux-saga/effects'
import { REQUEST_ARTICLES, RECEIVE_ARTICLES, REQUEST_ARTICLES_FAILED } from '../actions'
import { request } from 'https';
import { read } from 'fs';

let args =  ["http://localhost:8080/"];
let articles;
export function * fetchArticles() {
    try {
        var articles = yield call(fetchData, ...args);
        //console.log(articles);
        yield put({type: RECEIVE_ARTICLES, articles});
    } catch(error) {
        yield put({type: REQUEST_ARTICLES_FAILED, error});
    }
}

export function * watchRequestArticles() {
    yield takeEvery(REQUEST_ARTICLES, fetchArticles);
}

export default function * rootSaga() {
    yield all([
        watchRequestArticles()
    ]);
}

export async function fetchData(...args) {
   const response =  await fetch(...args);
   return response.json();
}