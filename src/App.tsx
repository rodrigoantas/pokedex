import React from 'react';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <Router>
      <Routes />
    </Router>
    <GlobalStyle />
  </>
);

export default App;