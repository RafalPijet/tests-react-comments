import uuid from "uuid";
export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const THUMB_UP = "THUMB_UP";
export const THUMB_DOWN = "THUMB_DOWN";

export const addComments = text => {
    return {
        type: ADD_COMMENT,
        id: uuid.v4(),
        text,
        votes: 0
    }
};

export const removeComment = id => {
    return {
        type: REMOVE_COMMENT,
        id
    }
};

export const thumbUpComment = () => {
    return {
        type: THUMB_UP
    }
};

export const thumbDownComment = () => {
    return {
        type: THUMB_DOWN
    }
};
