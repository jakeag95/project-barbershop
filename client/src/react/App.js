import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from '../store'
import Header from '../react/Header';
import BarberProfile from './components/BarberProfile';
import '../styles/app.scss';

import LandingPage from './containers/LandingPage'

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Header />
        <div className='App'>
          <Route path='/' component={LandingPage} exact/>
          <Route path='/:id' component={BarberProfile} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
