import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { es } from "react-intl/locale-data/es";
import { en } from "react-intl/locale-data/en";
import { addLocaleData } from "react-intl";

addLocaleData(es,en);

ReactDOM.render
    (<div>
            <App />
    </div>, document.getElementById('root'));
registerServiceWorker();
