import React from "react";
import CommentButton from "../CommentButton/CommentButton";
import Comment from "../Comment/Comment";
import PropTypes from "prop-types";
import "./CommentsList.css";

const CommentsList = props => (
    <div className="main-list">
        <CommentButton name="Add comment" styleButton="add-button" onClick={props.onClickAdd}/>
        {props.comments.map(comment => {
            return <Comment key={comment.id} text={comment.text} votes={comment.votes}
                            onClickUp={props.onClickUp} onClickDown={props.onClickDown}
                            onClickRemove={props.onClickRemove}/>
        })}
    </div>
);

CommentsList.propType = {
    comments: PropTypes.array.isRequired,
    onClickUp: PropTypes.func,
    onClickDown: PropTypes.func,
    onClickRemove: PropTypes.func,
    onClickAdd: PropTypes.func
};

export default CommentsList;
