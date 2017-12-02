import * as actions from './index'
import { addArtical, deleteArtical } from './index';

afterEach( () => {
    actions.reset()
})
test('addArtical return correct action', () => {
    const action = addArtical({ title: 'title', description: 'description'});
    expect(action).toEqual({
        type: actions.ADD_ARTICAL,
        artical: { id: 0, title: 'title', description: 'description'}
    })
})

test('addArtical increment id automatically', () => {
    let action = addArtical({ title: 'title', description: 'description'});
    action = addArtical({ title: 'title', description: 'description'});
    expect(action.artical.id).toBe(1)
})

test('deleteArtical return correct action', () => {
    let action = deleteArtical(1);
    expect(action).toEqual({type:actions.DELETE_ARTICAL, id:1})
})