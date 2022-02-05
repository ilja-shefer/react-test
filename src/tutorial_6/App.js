import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Article from './components/Article';
import { Nav, Navbar, Row, Col, Card } from 'react-bootstrap';

function App() {
  const { pathname } = window.location;
  console.log(pathname);

  const id = pathname.split("/post/")[1];

  return (
    <div className="App">
      <header>
        <a href="/">React Blog</a>
        <Nav variant="pills" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="/home" href="/">Главная</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/about" href="/about">Обо мне</Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
      {pathname === '/' && (
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150x150" />
              <Card.Body>
                <Card.Title>
                  <a href="/post/123">Card title</a>
                </Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
      {id && <Article id = {id} />}
      {pathname === '/about' && (
        <Card>
          <Card.Body>Это мой личный сайт!</Card.Body>
        </Card>
      )}
      <br />
      <Navbar bg="light" style={{ paddingLeft: 20 }}>
        <Navbar.Brand href="#home">My site (c) 2022</Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default App;
