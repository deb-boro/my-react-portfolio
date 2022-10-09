import React from 'react'

function Project() {
  return (
    <div className="my-2">
      <p>Portfolio Page</p>
      <section id="work">
        <div class="portfolio-sections">
          <div class="projects">
            <a
              href="https://github.com/RetroColossus/movie-central"
              class=" project first"
            >
              <div>
                <p class="project-name">
                  <br />
                  <span>Node.js/Express/MongoDB/GraphQL/ReactJS</span>
                </p>
              </div>
            </a>
            <a
              href="https://github.com/deb-boro/cat-game"
              class=" project second"
            >
              <div>
                <p>
                  CAT GAME
                  <br />
                  <span>
                    Node.js/Express/mysql2/Sequelize/Handlebars HTML/CSS
                  </span>
                </p>
              </div>
            </a>
            <a
              href="https://bradsw90.github.io/Buzzed-Rocket/"
              class=" project third"
            >
              <div>
                <p>
                  Buzzed-Rocket
                  <br />
                  <span>html/CSS/JavaScript</span>
                </p>
              </div>
            </a>
            <a
              href="https://deb-boro.github.io/run-buddy/"
              class=" project fourth"
            >
              <div>
                <p>
                  RUNBUDDY
                  <br />
                  <span>html/css</span>
                </p>
              </div>
            </a>
            <a
              href="https://deb-boro.github.io/my-weather-dashboard/"
              class=" project fifth"
            >
              <div>
                <p>
                  Weather Dashboard
                  <br />
                  <span>html/css/JavaScript</span>
                </p>
              </div>
            </a>
            <a
              href="https://deb-boro.github.io/day-scheduler/"
              class=" project sixth"
            >
              <div>
                <p>
                  Workday Scheduler
                  <br />
                  <span>html/css/JavaScript</span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project
