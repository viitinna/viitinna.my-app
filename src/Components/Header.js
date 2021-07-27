
import React, { Component } from 'react';
import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import logo from "./logo1.webp";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Blog from '../Pages/Blog';
import Contacts from '../Pages/Contacts';


export default class Heder extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="light">
                    <Container>
                        <Navbar.Brand href="/" >
                            <img
                            src={logo}
                            height="50"
                            width="70"
                            className="d-inline-block align-top"
                            alt="logo"                            
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse id="responsiv-navbar-nav" >
                            <Nav className="mr-auto" >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About us</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                            <Nav.Link href="/contacts">Contacts</Nav.Link>                    
                            </Nav>
                            <Form inline >
                                <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/contacts" component={Contacts} />

                    </Switch>
                </Router>

            </div>
        )
    }
}
