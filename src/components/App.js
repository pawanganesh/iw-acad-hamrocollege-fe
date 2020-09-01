import React, { Component, } from 'react';


import Header from "./layout/Header";
import Footer from "./layout/Footer";

import { Container } from "semantic-ui-react";
import Routes from '../routes';


class App extends Component{
  render(){
    return(
      <>
        <Header />
        <Container>
          <Routes/>
        </Container>
        <Footer />
      </>
    );
  }
}

export default App;