import React from 'react'
import Slider from 'react-slick'
import Carousel from './carousel.jsx'

export default ({project: {name, description, bulletPoints, images, technologies}}) => {

  return (
    <div className="project">
      <div className="info">
        {name}
        {description}
        <ol>
          {bulletPoints.map(bulletPoint => <li>{bulletPoint}</li>)}
        </ol>

        <ol>
          {technologies.map(technology => <span>{technology}</span>)}
        </ol>
      </div>

      <Carousel images={images} />
    </div>
  )
}