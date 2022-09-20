import React from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers'
import photo from '../../assets/cover/Project_1.png'

function Portfolio(props) {
  const currentCategory = {
    name: 'Project One',
    description: 'MERN stack',
  }
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p> {currentCategory.name}</p>
      <div>
        <img src={photo} alt="project one" className="img-thumbnail mx-1" />
      </div>
    </section>
  )
}

export default Portfolio
