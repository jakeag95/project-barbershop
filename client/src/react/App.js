import React from 'react';
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import store from '../store'

import LandingPage from './containers/LandingPage'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <LandingPage />
      </Router>
    </Provider>
  );
}

export default App;
