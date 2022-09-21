import React from 'react'

function Project() {
  const [projects] = [
    {
      name: 'commercial',
      description:
        'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    {
      name: 'landscape',
      description: 'Fields, farmhouses, waterfalls, and the beauty of nature',
    },
  ]
  return (
    <div className="my-2">
      <p>Portfolio Page</p>
      <section id="work">
        <div class="portfolio-sections">
          <div class="projects">
            <a
              href="https://github.com/deb-boro/cat-game"
              class=" project first"
            >
              <div>
                <p class="project-name">
                  <br />
                  <span>
                    Node.js/Express/mysql2/Sequelize/Handlebars HTML/CSS
                  </span>
                </p>
              </div>
            </a>
            <a
              href="https://bradsw90.github.io/Buzzed-Rocket/"
              class=" project second"
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
              class=" project third"
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
              class=" project fourth"
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
              class=" project fifth"
            >
              <div>
                <p>
                  Workday Scheduler
                  <br />
                  <span>html/css/JavaScript</span>
                </p>
              </div>
            </a>
            <a
              href="https://sleepy-peak-91139.herokuapp.com/"
              class=" project sixth"
            >
              <div>
                <p>
                  Note Taker Application
                  <br />
                  <span>html/css/JavaScript/Express</span>
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
