import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store';
// import { Error } from './components/error/Error';
import { App } from './pages/app/App';

ReactDOM.render(
    <Provider store={store}>
        {/* <Error> */}
        <Router>
            <App />
        </Router>
        {/* </Error> */}
    </Provider>,
    document.getElementById("root")
);