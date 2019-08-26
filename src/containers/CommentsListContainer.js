import React from "react";
import CommentsList from "../components/CommentsList/CommentsList";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {addComments, removeComment, thumbUpComment, thumbDownComment} from "../actions/comments-actions";

class CommentsListContainer extends React.Component {
    constructor(props) {
        super(props);
        const {dataComments, addComment} = this.props;
        for (let i = 0; i < dataComments.length; i++) {
            addComment(dataComments[i].text, dataComments[i].votes);
        }
    }

    handlingClickUp = id => {
        this.props.thumbUpComment(id);
    };

    handlingClickDown = id => {
        this.props.thumbDownComment(id);
    };

    handlingClickRemove = id => {
        this.props.removeComment(id);
    };

    handlingClickAdd = () => {
        let text = prompt("Enter new comment:");

        if (text.length > 0) {
            this.props.addComment(text);
        }
    };

    render() {
        return (
            <CommentsList comments={this.props.comments} onClickUp={this.handlingClickUp}
            onClickDown={this.handlingClickDown} onClickRemove={this.handlingClickRemove}
            onClickAdd={this.handlingClickAdd}/>
        )
    }
}

CommentsListContainer.propTypes = {
    comments: PropTypes.array.isRequired,
    dataComments: PropTypes.array.isRequired
};

const mapDispatchToProps = dispatch => ({
    addComment: (text, votes) => dispatch(addComments(text, votes)),
    removeComment: id => dispatch(removeComment(id)),
    thumbUpComment: id => dispatch(thumbUpComment(id)),
    thumbDownComment: id => dispatch(thumbDownComment(id))
});

const mapStateToProps = state => {
    return {
        comments: state.comments
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsListContainer);
