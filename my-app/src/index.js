//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import { store } from './app/store';
//import { Provider } from 'react-redux';
//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(
  //<React.StrictMode>
    //<Provider store={store}>
     // <App />
    //</Provider>
  //</React.StrictMode>,
  //document.getElementById('root')
//);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();


import { createStore } from "redux"; 

function playlist(state= [], action) {
  if (action.type === "ADD_TRACK"){
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

const store = createStore(playlist);

store.subscribe(() => {
  console.log('subscribe', store.getState());
});

store.dispatch({type: 'ADD_TRACK', payload: 'Good morning'});




//const addTrackBtn = document.querySelectorAll('.addTrack')[0];
//const trackInput = document.querySelectorAll('.trackInput')[0];
//const list = document.querySelectorAll('.list')[0];

//store.subscribe(() => {
  //list.innerHTML = '';
  //trackInput.value = '';
  //store.getState().forEach(track => {
    //const li = document.createElement('li');
    //li.textContent = track;
    //list.appendChild(li);
  //});
//})


//addTrackBtn.addEventListener("click", () => {
 //const trackName = trackInput.value;
 //console.log('trackName', trackName);
 //store.dispatch({type: 'ADD_TRACK', payload: trackName });
//});



