import React from "react"
import "./App.css"

function App() {
  return (
    <div className="page">
      <nav className="nav">
        <h1 className="brand">Denomination</h1>

        <div className="links">
          <p>Projects</p>
          <p>About</p>
          <p>News</p>
          <p>Contact</p>
        </div>
      </nav>

      <section className="hero">
        <p className="small">Experience Intelligent Bravery</p>
        <h1>Drinks Branding Specialists</h1>
      </section>

      <section className="projects">
        <div className="bigcard">
          <div className="photo dark"></div>
          <h2>Penfolds Grange</h2>
          <p>Behind glass. Globally.</p>
          <span>Wine</span>
        </div>

        <div className="card">
          <div className="photo red"></div>
          <h2>Strutter Whiskey</h2>
          <p>Meet Strutter, the whiskey brand with swagger.</p>
          <span>Spirits</span>
        </div>

        <div className="card">
          <div className="photo gold"></div>
          <h2>Grgich Paradise Block</h2>
          <p>A jewel of the valley, recast in sculptural elegance.</p>
          <span>Wine</span>
        </div>
      </section>

      <section className="news">
        <h1>Recent News</h1>

        <div className="newsgrid">
          <div>
            <div className="newsimg"></div>
            <p>Growing our global team</p>
          </div>

          <div>
            <div className="newsimg"></div>
            <p>Purpose-led brand building</p>
          </div>

          <div>
            <div className="newsimg"></div>
            <p>Why spirits brands are changing</p>
          </div>
        </div>
      </section>

      <section className="about">
        <h1>About</h1>
        <p>
          We are drinks brand experts. We use strategy, design and brave ideas
          to help brands look different and feel more special.
        </p>
      </section>

      <footer>
        <h2>Get in Touch</h2>
        <div className="cities">
          <p>London</p>
          <p>San Francisco</p>
          <p>New York</p>
          <p>Sydney</p>
        </div>
      </footer>
    </div>
  )
}

export default App
