import React, { Component } from "react";
import {Carousel} from 'react-bootstrap'
import img1 from "../image/page1.jpg";
import img2 from "../image/page2.jpg";
import img3 from "../image/page3.jpg";
import Slider from "react-slick";

export default class cardbody extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <>
        <div>
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
  }
}
