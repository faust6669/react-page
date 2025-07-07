
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <p>Copyright &copy; {new Date().getFullYear()} My Landing Page</p>
      </Container>
    </footer>
  );
};

export default Footer;
