import React from "react";
import PropTypes from "prop-types";

const CommentButton = props => (
    <button className={props.styleButton} onClick={() => props.onClick(props.id)}>{props.name}</button>
);

CommentButton.propTypes = {
    name: PropTypes.string.isRequired,
    styleButton: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    id: PropTypes.string
};

export default CommentButton;
