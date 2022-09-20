import React, { useState } from 'react'
import About from './components/About'
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'

function App() {
  const [categories] = useState([
    { name: 'About Me' },
    { name: 'Portfolio' },
    { name: 'Contact Me' },
    { name: 'Resume' },
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0])

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <Portfolio></Portfolio>
          <About></About>
        </div>
      </main>
    </div>
  )
}

export default App
