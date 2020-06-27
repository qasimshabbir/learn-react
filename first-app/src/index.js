import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const HiFullName = ({firstname,lastname}) => (
  <div>Hi {firstname} {lastname}!</div>
);

const MediaCard = ({title,body,imageUrl}) => (
  <div>
    <h2>{title}</h2> 
    <p>{body}</p> 
    <img src={imageUrl} alt={title}></img>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <App name="Qasim" />
    <HiFullName firstname="Qasim" lastname="Ferozpurwala" />
    <MediaCard title="A New Challange" 
      body="A Great way to learn react"
      imageUrl = "https://q-sols.com/wp-content/uploads/2018/08/qsols-logo-1.png" 
    /> 
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
