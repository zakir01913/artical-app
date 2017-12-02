export const ADD_ARTICAL = 'ADD_ARTICAL'
export const DELETE_ARTICAL = 'DELETE_ARTICAL'

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

export const reset = () => {
    nextArticalId = 0
}