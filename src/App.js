import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

import Layout from './components/Layout';


function App() {
  return (
    <Router>
      <Layout>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
      </Layout>
    </Router>
  );
}

export default App;
