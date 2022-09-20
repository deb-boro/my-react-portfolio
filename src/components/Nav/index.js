import React from 'react'

function Nav() {
  const categories = [
    { name: 'About Me' },
    { name: 'Portfolio' },
    { name: 'Contact Me' },
    { name: 'Resume' },
  ]
  function categorySelected(name) {
    console.log(`${name} clicked`)
  }
  return (
    <header className="header-container">
      <h2>
        <a href="/">
          <span role="img" aria-label="camera">
            {' '}
          </span>{' '}
          DEBAJIT BORO
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          {categories.map((category) => (
            <li className="mx-2" key={category.name}>
              <span onClick={categorySelected(category.name)}>
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav
