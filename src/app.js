import React from 'react';
import { render } from 'react-dom';
import App from 'containers/App';
import Shop from 'containers/Shop';
import Homepage from 'containers/Homepage';
import { Provider } from 'react-redux';
import store from './configureStore';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const history = syncHistoryWithStore(browserHistory, store);

const mount = document.getElementById('app');
render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Homepage} />
        <Route path="shop" component={Shop} />
      </Route>
    </Router>
  </Provider>,
  mount
);
