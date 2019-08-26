import {ADD_COMMENT, REMOVE_COMMENT, THUMB_UP, THUMB_DOWN} from "../actions/comments-actions";

const comments = (state = [], action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return [
                {
                    id: action.id,
                    text: action.text,
                    votes: action.votes
                }, ...state];
        case REMOVE_COMMENT:
            return state.filter(comment => comment.id !== action.id);
        case THUMB_UP:
            return state.map(comment => {

                if (comment.id === action.id) {
                    return {...comment, votes: comment.votes + 1}
                }
                return comment;
            });
        case THUMB_DOWN:
            return state.map(comment => {

                if (comment.id === action.id) {
                    return {...comment, votes: comment.votes - 1}
                }
                return comment;
            });
        default:
            return state;
    }
};

export default comments;
