import React, { Component, PropTypes } from 'react';
import { List } from 'immutable';
import { Link } from 'react-router';
import { Carousel } from 'react-bootstrap';

class Slides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      direction: null
    };

    // Bind callback methods to make `this` the correct context.
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedIndex, e) {
    alert('selected=' + selectedIndex + ', direction=' + e.direction);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    return (
      <div>
        {//this.props.slides
        this.props.slides.map(s => {
          let id = s.get('id');
          let title = s.get('title');
          let image = s.get('image');
          let alt = s.get('alt');
          let caption = s.get('caption');
          return (
            <Carousel
              activeIndex={this.state.index}
              direction={this.state.direction}
              onSelect={(i, e) => this.handleSelect(i, e)}
              key={id}
            >
              <Carousel.Item>
                <img
                  width={640}
                  height={480}
                  alt="640x480"
                  src={image}
                  alt={alt}
                />
                <Carousel.Caption>
                  <h3>{title}</h3>
                  <p>{caption}</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  width={640}
                  height={480}
                  alt="640x480"
                  src={image}
                  alt={alt}
                />
                <Carousel.Caption>
                  <h3>{title}</h3>
                  <p>{caption}</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  width={640}
                  height={480}
                  alt="640x480"
                  src={image}
                  alt={alt}
                />
                <Carousel.Caption>
                  <h3>{title}</h3>
                  <p>{caption}</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          );
        })}
      </div>
    );
  }
}

Slides.propTypes = {
  slides: PropTypes.instanceOf(List).isRequired
};

export default Slides;
