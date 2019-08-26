import React from "react";
import "./Comment.css";
import PropTypes from "prop-types";
import CommentButton from "../CommentButton/CommentButton";

const Comment = props => (
    <div className="main col-12">
        <p className="col-4 m-0">{props.text}</p>
        <p className="col-1 m-0">{props.votes}</p>
        <div className="col-7 buttons">
            <CommentButton name="Thumb UP" styleButton="btn-success" id={props.id}
                           onClick={props.onClickUp}/>
            <CommentButton name="Thumb DOWN" styleButton="btn-success" id={props.id}
                           onClick={props.onClickDown}/>
            <CommentButton name="Remove" styleButton="btn-danger" id={props.id}
                           onClick={props.onClickRemove}/>
        </div>
    </div>
);

Comment.propTypes = {
    text: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    onClickUp: PropTypes.func,
    onClickDown: PropTypes.func,
    onClickRemove: PropTypes.func
};

export default Comment;
