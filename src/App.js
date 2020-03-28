import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Connect from './pages/Connect';
import Resources from './pages/Resources';

import Layout from './components/Layout';


function App() {
  return (
    <Router>
      <Layout>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path='/connect' component={Connect}/>
        <Route exact path='/resources' component={Resources}/>
      </Layout>
    </Router>
  );
}

export default App;
