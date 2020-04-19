import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './component/contacts/Contacts';
import Header from './component/layout/Header';
import AddContact from './component/contacts/AddContact';
import EditContact from './component/contacts/EditContact';
import About from './component/pages/About';
import Test from './component/Test/Test';
import NotFound from './component/pages/NotFound';
import  {Provider}   from  './Context';
import './App.css';
class  App extends Component {
  render() {
  return (
  <Provider> 
    <Router>
       <div className="App">
        <Header branding="Contact Manager" />
         <div className="container">
        <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/about" component={About} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/contact/add" component={AddContact} />
            <Route exact path="/contact/edit/:id" component={EditContact} />
            <Route component={NotFound} />
        </Switch>
          </div>
        </div>
      </Router>
  </Provider>
  
  );
  }
}

export default App;
