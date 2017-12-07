import {
    ADD_ARTICAL,
    DELETE_ARTICAL,
    RECEIVE_ARTICLES
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
        break;
        case RECEIVE_ARTICLES: 
        console.log(action);
            return [
                ...state,
                ...action.articles
            ];
        default:
            return state;
    } 
}

export default articals