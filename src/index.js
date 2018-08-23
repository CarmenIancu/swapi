import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import App from './Containers/App';



const startBtn= document.getElementById('start');

startBtn.addEventListener('click',() => {
    startBtn.remove();


	ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
})
