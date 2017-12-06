import { takeEvery, put, call, all} from 'redux-saga/effects'
import { REQUEST_ARTICLES, RECEIVE_ARTICLES, REQUEST_ARTICLES_FAILED } from '../actions'

let server = "";

export function * fetchArticles() {
    try {
        //const data = yield call(fetch, server);
        //yield put({type: RECEIVE_ARTICLES, data});
        console.log('fetchArticles');
    } catch(error) {
        yield put({typd: REQUEST_ARTICLES_FAILED, error});
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