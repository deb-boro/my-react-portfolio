import React from 'react'
import coverImage from '../../assets/cover/147142.png'
function About() {
  return (
    <section className="my-5">
      <h1 id="about"> About Me</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: '10%' }}
        alt="cover"
      />
      <div className="my-2">
        <p>
          I have Quality Engineering Experience in Financial Services and
          Insurance Industry. I am currently enrolled for coding bootcamp to
          reinvent myself as an full stack developer.I’m living in Charlotte,
          North Carolina. My focus areas of web development from back end
          programming (node.js) to front end engineering (HTML, CSS, and
          jQuery/Javascript), digital accessibility, user experience and visual
          design. I’m extremely passionate to learn as much as i can from the
          bootcamp about web development and design in all it’s forms and
          helping small businesses and artisans build and improve their online
          presence. When i am not coding, i would love to play guitar and
          spending time with my one year old boy.
        </p>
      </div>
    </section>
  )
}

export default About
