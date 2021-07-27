
import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';


export default class About extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Tab.Container id="ledt-tabs-example" defaultActiveKey="first" >
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column mt-2">

                                    <Nav.Item>
                                        <Nav.Link eventKey="first" >Team</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="second" >Products</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="third" >Delivery</Nav.Link>
                                    </Nav.Item>

                                </Nav>
                           </Col>

                           <Col sm={9}>
                               <Tab.Content>

                                   <Tab.Pane eventKey="first">
                                       <p>
                                       <h3>Our team of specialists will make your holiday unforgettable and bright!</h3>
                                       </p>
                                       <p>
                                       We love our work and our clients! That is why we try to present the best, choose the highest quality, interesting and unique flowers that have abundant flowering, amazing color combinations, and which will delight their owners for many years.
                                       </p>
                                       <img src="https://envato-shoebox-0.imgix.net/10a7/a7f8-cd6e-4b16-9440-70e544f00215/WM2A9882.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1000&s=d57ac1ba85d26453f413072e57434c2e"/>      
                                   </Tab.Pane>

                                   <Tab.Pane eventKey="second">
                                       <p>
                                       <h3>Only fresh flowers from the best suppliers, grown with love!</h3>
                                       </p>
                                       <p>
                                       We work with the best flower suppliers in Europe and offer a wide range of flowers. Especially for your order, we will create a unique composition of colorful, bright and fresh flowers.
                                       </p>
                                       <img src="https://envato-shoebox-0.imgix.net/c68b/5e16-caf3-41fe-b8c4-4ad555a91029/cp_023.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1000&s=087dfa7d0b88580766db3ce33ca9a33c"/>    
                                   </Tab.Pane>

                                   <Tab.Pane eventKey="third">
                                       <p>
                                       <h3>Fast delivery to any corner of the city!</h3>
                                       </p>
                                       <p>
                                       The cost of delivery is paid by the client according to the rates and conditions of the courier service.
                                       Delivery times of goods are individual and depend on the recipient's place of residence, as well as the delivery schedule.
                                       With each order, the studio manager will contact you to clarify the details.
                                       </p>
                                       <img src="https://envato-shoebox-0.imgix.net/d14a/aff1-ce65-4132-8c7c-8a8c0c79eb6f/306012648.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1000&s=1414b535231e966641eb8a5eb0d52f8c"/>                               
                                   </Tab.Pane>

                               </Tab.Content>
                           </Col>
                        </Row>

                    </Tab.Container>

                </Container>
                
            </div>
        )
    }
}
