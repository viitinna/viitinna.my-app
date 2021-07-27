import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banervImg from "../assets/banerv.jpg";
import baneraImg from "../assets/banera.jpg";
import banerbImg from "../assets/banerb.jpg";



export default class CarouselBox extends Component {
    render() {
        return (
            <div>
                <Carousel>

                <Carousel.Item>
                        <img 
                        className="d-block w-100"
                        src={ banervImg }
                        alt="Flower"                        
                        />
                        <Carousel.Caption>
                            <h3>Flower my dreem</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img 
                        className="d-block w-100"
                        src={ baneraImg }
                        alt="Flower"                        
                        />
                        <Carousel.Caption>
                            <h3>Flower my dreem</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img 
                        className="d-block w-100"
                        src={ banerbImg }
                        alt="Flower"                        
                        />
                        <Carousel.Caption>
                            <h3>Flower my dreem</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
                
            </div>
        )
    }
}
