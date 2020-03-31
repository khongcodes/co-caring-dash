import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Chat from './pages/Chat';
import Resources from './pages/Resources';
import Error404 from './pages/404';

import Layout from './components/Layout';


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/chat' component={Chat}/>
          <Route exact path='/resources' component={Resources}/>
          <Route exact path='/about' component={About}/>
          <Route path='*' component={Error404} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
