import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";

class CarouselSelf extends Component {

    state = {
        index:0
    }

    handleSelect = (index, e) => {
        this.setState({index});
    };

    render() {
        return (
            <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.caandesign.com/wp-content/uploads/2016/09/elite-house-located-rostov-region-russia-architectural-studio-chado-07.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.caandesign.com/wp-content/uploads/2016/09/elite-house-located-rostov-region-russia-architectural-studio-chado-07.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.caandesign.com/wp-content/uploads/2016/09/elite-house-located-rostov-region-russia-architectural-studio-chado-07.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.caandesign.com/wp-content/uploads/2016/09/elite-house-located-rostov-region-russia-architectural-studio-chado-07.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.caandesign.com/wp-content/uploads/2016/09/elite-house-located-rostov-region-russia-architectural-studio-chado-07.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselSelf;