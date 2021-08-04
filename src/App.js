import React from 'react';
//routing
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

//components
import Header from './components/Header';
import Table from './pages/Table';
import Home from './pages/LandingPage';
import NotFound from './pages/NotFound';

//styles
import { GlobalStyle } from './GlobalStyles';

const App = () => (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Table />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );

export default App;
