import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/layout/Header'
// import Dashboard from './components/assign/Dashboard'
import {Provider} from 'react-redux'
import store from './store'
import Author from './components/Author/Author'
import Publisher from './components/Publisher/Publisher'
import Book from './components/Book/Book'
import Request from './components/Request/Request'
import Issue from './components/Issue/Issue'




function App() {
  return (
    <Provider store={store}>
      <Router>        
        <Header/>  
        {/* <div className='container'>
          
        </div>  */}
        <Switch>            
            <Route exact path="/author" component={Author} />
            <Route exact path="/publisher" component={Publisher} />  
            <Route exact path="/book" component={Book} />  
            <Route exact path="/request" component={Request} />
            <Route exact path="/issue" component={Issue} />          
        </Switch>
      </Router>
    </Provider>
    
  );
}

export default App;
