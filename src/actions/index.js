export const ADD_ARTICAL = 'ADD_ARTICAL'
export const DELETE_ARTICAL = 'DELETE_ARTICAL'
export const REQUEST_ARTICLES = 'REQUEST_ARTICLES'
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES'
export const REQUEST_ARTICLES_FAILED = 'REQUEST_ARTICLES_FAILED'

let nextArticalId = 0;

export const  addArtical = artical => {
    artical.id = nextArticalId++
    return {
        type: ADD_ARTICAL,
        artical
    }
}

export const deleteArtical = id => {
    return {
        type: DELETE_ARTICAL,
        id
    }
}

export const requestArticles = () => {
    return {
        type: REQUEST_ARTICLES
    }
}

export const reset = () => {
    nextArticalId = 0
}