import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default ({project}) => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  }


  return (
    <div className="project">
      <div>
        {project.name}
        {project.description}
        <ol>
          {project.bulletPoints.map(bulletPoint => <li>{bulletPoint}</li>)}
        </ol>

        <ol>
          {project.technologies.map(technology => <span>{technology}</span>)}
        </ol>
      </div>

      
        <Slider {...settings}>
          {project.images.map(image => <div><img src={image} /></div>)}
        </Slider>
     

    </div>
  )
}