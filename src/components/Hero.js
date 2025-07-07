
import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="bg-light p-5 rounded-lg m-3">
      <Container>
        <h1 className="display-4">Welcome to My Landing Page</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button variant="primary">Learn more</Button>
        </p>
      </Container>
    </div>
  );
};

export default Hero;
