import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { es } from "react-intl/locale-data/es";
import { en } from "react-intl/locale-data/en";
import { addLocaleData } from "react-intl";
import {
    Provider
} from 'react-redux'
import store from './store'

addLocaleData(es,en);

ReactDOM.render
    (<div>
        <Provider store={store}>
            <App />
        </Provider>
    </div>, document.getElementById('root'));
registerServiceWorker();
