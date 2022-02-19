import React from 'react';

import { Navbar } from 'react-bootstrap';

function Footer() {
  return (
    <Navbar bg="light" style={{ paddingLeft: 20 }}>
      <Navbar.Brand href="#home">My site (c) 2022</Navbar.Brand>
    </Navbar>
  );
}

export default Footer;
