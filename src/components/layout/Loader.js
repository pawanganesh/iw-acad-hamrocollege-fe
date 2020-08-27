import React from "react";
import { Image, Container } from "semantic-ui-react";
import loader from "../../shared/image/loader.gif";

const Loader = (props) => {
  return (
    <Container>
      <Image alt="Loader img" src={loader} />
    </Container>
  );
};

export default Loader;
