import React from "react";
import PropTypes from "prop-types";

const CommentButton = props => (
    <button className={props.styleButton} onClick={() => props.onClick()}>{props.name}</button>
);

CommentButton.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    styleButton: PropTypes.string.isRequired
};

export default CommentButton;
