import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import './index.css';

//  Twitter component
// add tweet destructuring
// Tweet function takes in a tweet object "{tweet}"
// inside Tweet function iam using Jsx to perform function call to other components
// remember we are using functions to define our components.
function Tweet({tweet}){
    return (
        <div className="tweet">
        <Avatar hash={tweet.gravatar}/>
        <div className="content">
        <div>
             <NameWithHandle name = {tweet.author.name} handle ={tweet.author.handle} />
             <Time timestamp={tweet.timestamp}/>
             </div>
            <Message message={tweet.message}/>
            <div className="buttons">
                <ReplyButton/>
                <RetweetButton count={tweet.retweets}/>
                <LikeButton count={tweet.likes}/>
                <MoreOptionsButton/>
            </div>
        </div>
        </div>
    );
}


// tweet object
var testTweet = {
  message: "This is why i love code.",
  gravatar: "kim.jpeg",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person"
  },
  likes: 2,
  retweets: 2,
  timestamp: "2016-07-30 21:24:37"
};

// avatar component
function Avatar({hash}){
    var url = hash;
    console.log(hash)
    return(
        <img
        src={url}
        className="avatar"
         alt="avatar" />
    );
}

// message component
// destructing our message function to accept message dynamically
function Message({message}){
    return(
        <div className="message">
        {message}
        </div>
    );
}

// @Handle component
// we are using destructuring to define the properties of our Handle object
function NameWithHandle({handle, name}){
    return (
        <span className="name-with-handle">
        <span className="name"> {name} </span>
        <span className="handle"> @{handle} </span>
        </span>
    );
}

NameWithHandle.propTypes = {
    handle : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
}



// time component
// this time we are improving and using arrow functions to define time
const Time = ({timestamp}) => (
  <span className="time">
    {timestamp}
  </span>
);

// reply button component
const ReplyButton = () => (
  <i className="fa fa-reply reply-button"/>
);

// validate retweet to display retweets if count is > 0
function getRetweetCount(count){
    if (count > 0)
        return (
         <span className="retweet-count">
        {count}
         </span>
        );
    return null;

}

// retweet button component
const RetweetButton = ({count}) => (
    <span className="retweet-count">
    <i className="fa fa-retweet "/>
    {getRetweetCount(count)}
  </span>
);

// like button component
const LikeButton = ({count}) => (
    <span className="like-button">
   <i className="fa fa-heart "/>
   {count > 0 &&
      <span className="like-count">
        {count}
      </span>}
   </span>
);

LikeButton.propTypes = {
  count: PropTypes.number
};

// more options button component
const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
);

ReactDOM.render(
    <Tweet tweet={testTweet}/>,
    document.querySelector('#root')
)
