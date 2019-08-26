import React from 'react';
import './App.css';
import CommentsListContainer from "./containers/CommentsListContainer";
import dataComments from "./data/commentsData";

class App extends React.Component {
  render() {
    return (
        <div className="App">
            <CommentsListContainer dataComments={dataComments}/>
        </div>
    );
  }
}

export default App;
