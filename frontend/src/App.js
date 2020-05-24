import React from 'react';
import Layout from './hocs/Layout'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Listing from './containers/Listing';
import Signup from './containers/Signup';
import Login from './containers/Lognin';
import ListingDetail from './containers/ListingDetail';
import Contact from './containers/Contact';
import NotFound from './components/NotFound'
import './saas/main.scss'
import { Provider } from 'react-redux';
import store from './store';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/about' component={About} />
            <Route exact path='/listing' component={Listing} />
            <Route exact path='/listing/:id/' component={ListingDetail} />
            <Route exact path='/login/' component={Login} />
            <Route exact path='/signup/' component={Signup} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
