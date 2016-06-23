import {createStore, applyMiddleware, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import thunkMiddleware from 'redux-thunk'

// import the root reducer
import rootReducer from '../reducers/index';


const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

export const history = syncHistoryWithStore(browserHistory,store);

if(module.hot) {
  module.hot.accept('../reducers/',() => {
    const nextRootReducer = require('../reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;