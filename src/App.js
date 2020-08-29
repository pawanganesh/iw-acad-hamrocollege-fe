import React from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/layout/Header'
import Dashboard from './components/assign/Dashboard'
import {Provider} from 'react-redux'
import store from './store'



function App() {
  return (
    <Provider store={store}>          
        <Header/>  
        <div className='container'>
          <Dashboard/>
        </div>        
      
    </Provider>
  );
}

export default App;
