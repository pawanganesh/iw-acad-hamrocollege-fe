import React, { Component, Fragment } from 'react';


import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "../components/Home";

import { Container } from "semantic-ui-react";


class App extends Component{
  render(){
    return(
      <Fragment>
        <Header />
        <Container>
          <Home />
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default App;