import React from 'react';
import ReactDOM from 'react-dom';
import { Provider  } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';

import Capabilities from './components/capabilities/Capabilities';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
		<Capabilities />
	</Provider>
  , document.querySelector('#capabilities'));
