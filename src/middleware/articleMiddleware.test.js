import { fetchArticles, fetchData } from './articleMiddleware'
import { call, put } from 'redux-saga/effects'
import { RECEIVE_ARTICLES, REQUEST_ARTICLES_FAILED} from '../actions'

test('test fetchArticles call fetchData with right args', () => {
    let args =  ["http://localhost:8080/"];
    const iterator = fetchArticles();

    expect(iterator.next().value).toEqual(call(fetchData, ...args))
});

test('test fetchArticles put valid dispatch', () => {
    const articles = [{
        id : 1,
        title: 'title',
        description: 'description'
    }];
    const iterator = fetchArticles();

    iterator.next();
    const value = iterator.next(articles).value;

    expect(value).toEqual(put({type: RECEIVE_ARTICLES, articles}));
})

test('test fetchArticles handle error correctly', () => {
    const iterator = fetchArticles();
    const error = { code: 1, message: 'Failed fetch articles'} 

    iterator.next();
    const value = iterator.throw(error).value;

    expect(value).toEqual(put({type: REQUEST_ARTICLES_FAILED, error}));
})