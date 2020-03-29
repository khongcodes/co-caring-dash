import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import ChatForum from './pages/ChatForum';
import Resources from './pages/Resources';

import Layout from './components/Layout';


function App() {
  return (
    <Router>
      <Layout>
        <Route exact path='/' component={Home}/>
        <Route exact path='/chat-forum' component={ChatForum}/>
        <Route exact path='/resources' component={Resources}/>
        <Route exact path='/about' component={About}/>
      </Layout>
    </Router>
  );
}

export default App;
