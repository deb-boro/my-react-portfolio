import React, { useEffect } from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers'

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name)
  }, [currentCategory])

  // conditional rendering
  return (
    <header className="header-container">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {' '}
          </span>{' '}
          DEBAJIT BORO
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          {categories.map((category) => (
            <li
              className={`mx-2 ${
                currentCategory.name === category.name && 'navActive'
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category)
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav
