import React from 'react';
import {render} from 'react-dom';

import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';

import Site from './Site';

const store = createStore(reducers);

render(
    <Provider store={store}>
        <Site />
    </Provider>
    , document.getElementById('root'));
