import React, { Component } from 'react'
import $ from 'jquery'

export default class Carousel extends Component {
  constructor({images}) {
    super()
    this.state = {images, animating: false}
    this.active = 0
  }

  appendNext = () => {
    this.slider.append(`<img src=${this.state.images[(this.active + 2) % this.state.images.length]} />`)
    $(this.slider.find('img')[1]).css({marginLeft: '-250px'})
    this.slider.find('img').first().remove()
    this.setState({animating: false})
  }

  prependPrevious = () => {
    this.slider.prepend(`<img src=${this.state.images[(this.active + this.state.images.length - 2) % this.state.images.length]} />`)
    this.slider.find('img').last().remove()
    this.setState({animating: false})
  }

  updateActive = operation => {
    const len = this.state.images.length - 1;
    const { active } = this

    if (operation === '-') return active === len ? 0 : active + 1
    return active === 0 ? len : active - 1;
  }

  slide = operation => {
    if (!this.state.animating) {
      this.setState({animating: true}, () => {
        this.slider.find('img').first().animate({marginLeft: `${operation}=250px`}, 1000, () => {
          if (operation === '-') this.appendNext()
          else this.prependPrevious()
          this.active = this.updateActive(operation)
        })
      })
    }
  }

  render() {
    const { images } = this.state

    return (
      <div className="carousel">
        <button className="left" onClick={() => this.slide('-')}>L</button>
        <div className="slide-container">
          <div className="slider" ref={slider => this.slider = $(slider)}>{images.map(image => <img src={image} />)}</div>
        </div>
        <button className="right" onClick={() => this.slide('+')}>R</button>
      </div>
    );
  }
}