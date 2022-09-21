import React, { useState } from 'react'
import About from './components/About'
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'
import ContactForm from './components/Contact'
import Resume from './components/Resume'

function App() {
  const [contactSelected, setContactSelected] = useState(false)
  const [portfolioSelected, setPortfolioSelected] = useState(false)
  const [resumeSelected, setResumeSelected] = useState(false)

  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main>
        {contactSelected ? (
          <>
            <ContactForm></ContactForm>
          </>
        ) : portfolioSelected ? (
          <>
            <Portfolio></Portfolio>
          </>
        ) : resumeSelected ? (
          <>
            <Resume></Resume>
          </>
        ) : (
          <About></About>
        )}
      </main>
    </div>
  )
}

export default App
