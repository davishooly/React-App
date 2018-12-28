import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//  Twitter component
function Tweet(){
    return (
        <div className="tweet">
        <Avatar/>
        <div className="content">
        <div>
             <NameWithHandle name="Kimamedavis" handle="@kimdaiv"/>
             <Time/>
             </div>
            <Message/>
            <div className="buttons">
                <ReplyButton/>
                <RetweetButton/>
                <LikeButton/>
                <MoreOptionsButton/>
            </div>
        </div>
        </div>
    );
}

// avatar component
function Avatar(){
    return(
        <img
        src="https://www.gravatar.com/avatar/nothing"
        className="avatar"
         alt="avatar" />
    );
}

// message component
function Message(){
    return(
        <div className="message">
        This is why i love code.
        </div>
    );
}

// @Handle component
// we are using props to define the properties of our Handle object
function NameWithHandle(props){
    return (
        <span className="name-with-handle">
        <span className="name"> {props.name} </span>
        <span className="handle">{props.handle}</span>
        </span>
    );
}

// time component
// this time we are improving and using arrow functions to define time
const Time = () => (
  <span className="time">
    3h ago
  </span>
);

// reply button component
const ReplyButton = () => (
  <i className="fa fa-reply reply-button"/>
);

// retweet button component
const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button"/>
);

// like button component
const LikeButton = () => (
  <i className="fa fa-heart like-button"/>
);

// more options button component
const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
);


ReactDOM.render(
    <Tweet/>,
    document.querySelector('#root')
)