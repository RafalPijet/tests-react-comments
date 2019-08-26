import React from "react";
import CommentsList from "../components/CommentsList";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {addComments, removeComment, thumbUpComment, thumbDownComment} from "../actions/comments-actions";

class CommentsListContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CommentsList comments={this.props.comments}/>
        )
    }
}

CommentsListContainer.propTypes = {
    comments: PropTypes.array.isRequired
};

const mapDispatchToProps = dispatch => ({
    addComments: text => dispatch(addComments(text)),
    removeComment: id => dispatch(removeComment(id)),
    thumbUpComment: () => dispatch(thumbUpComment()),
    thumbDownComment: () => dispatch(thumbDownComment())
});

const mapStateToProps = state => {
    return {
        comments: state.comments
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsListContainer);
