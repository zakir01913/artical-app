import {
    ADD_ARTICAL,
    DELETE_ARTICAL
} from '../actions'

const articals = (state = [], action) => {
    switch(action.type) {
        case ADD_ARTICAL: {
            return [
                ...state,
                {
                    id: action.artical.id,
                    title: action.artical.title,
                    description: action.artical.description
                }
            ];
        }
        break;

        case DELETE_ARTICAL: {
            return state.filter(artical => artical.id !== action.id)
        }
        default:
            return state;
    } 
}

export default articals