import articals from './articals'
import { addArtical, deleteArtical } from '../actions';
let state

afterEach( () => {
    state = []
})

test('test ADD_ARTICAL with empty state', () => {
    let artical = {
        title: 'title',
        description: 'description'
    }
    let action = addArtical(artical);
    //console.log(action)
    
    state = articals(state, action);

    expect(state.length).toBe(1);
    expect(state[0]).toEqual({id: 0, ...artical});
})

test('test ADD_ARTICAL with not empty state', () => {
    let artical = {
        title: 'title',
        description: 'description'
    }
    let action = addArtical(artical);
    state = [{...action.artical}]
    //console.log(state);
    artical.title = 'title2';
    artical.description = 'description2';
    action = addArtical(artical);
    
    state = articals(state, action);

    expect(state.length).toBe(2);
    expect(state[1]).toEqual({id: 1, ...artical});
})

test('test DELETE_ARTICAL with with valid id', () => {
    let artical = {
        id: 0,
        title: 'title',
        description: 'description'
    }
    let deleteAction = deleteArtical(0);
    //deleteAction.id = 0;
    state = [{...artical}]
    //console.log(state);
    //console.log(deleteAction);

    state = articals(state, deleteAction);
    //console.log(state);
    expect(state.length).toBe(0);
})

test('test DELETE_ARTICAL with with invalid id', () => {
    let artical = {
        id: 0,
        title: 'title',
        description: 'description'
    }
    let deleteAction = deleteArtical(1);
    state = [{...artical}]
    //console.log(state);
    //console.log(deleteAction);

    state = articals(state, deleteAction);
    //console.log(state);
    expect(state.length).toBe(1);
})

test('test articals with with invalid action', () => {
    let artical = {
        id: 0,
        title: 'title',
        description: 'description'
    }
    let deleteAction = deleteArtical(0);
    deleteAction.type = "invalid"
    state = [{...artical}]
    //console.log(state);
    //console.log(deleteAction);

    let state1 = articals(state, deleteAction);
    //console.log(state);
    expect(state).toEqual(state1);
})

