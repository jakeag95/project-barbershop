import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme'
import store from '../store'
import Header from '../react/Header';
import BarberProfile from './components/BarberProfile';
import LandingPage from './containers/LandingPage'
import '../styles/app.scss';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Provider store={store}>
          <Router>
          <Header />
            <div className='App'>
              <Route path='/' component={LandingPage} exact/>
              <Route path='/:id' component={BarberProfile} />
            </div>
          </Router>
        </Provider>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
