import React from "react"
import { useState } from "react"
import "./App.css"
function App() {
  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState([])

  const handleInputChange = ({ target }) => {
    setInput(target.value)
  }

  const addTask = () => {
    if (input !== "" && tasks.length < 5) {
      setTasks([
        ...tasks,
        { text: input, done: false }
      ])
      setInput("")
    }
  }

  const deleteTask = index => {
    const copyTasks = [...tasks]
    copyTasks[index].done = true

    setTasks(copyTasks)

    setTimeout(() => {
      setTasks(currentTasks =>
        currentTasks.filter((task, i) => i !== index)
      )
    }, 500)
  }

  const clearAllTasks = () => {
    setTasks([])
  }

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      addTask()
    }
  }

  return (
    <>
      <input
        value={input}
        type="text"
        placeholder="Enter Task"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />

      <button onClick={addTask}>Add Task</button>
      <button onClick={clearAllTasks}>Clear All</button>

      <p>Tasks: {tasks.length}/5</p>

      <ul>
        {tasks.map((task, i) => {
          return (
            <li
              key={i}
              style={{
                textDecoration: task.done ? "line-through" : "none"
              }}
            >
              {task.text}
              <button onClick={() => deleteTask(i)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}


function App() {
  return (
    <div className="app">
      <header className="top">
        <div className="logo">Phantom</div>

        <nav className="nav">
          <a href="">Security</a>
          <a href="">Learn</a>
          <a href="">Explore</a>
          <a href="">Company</a>
          <a href="">Support</a>
        </nav>

        <button className="downloadBtn">Download</button>
      </header>

      <section className="hero">
        <div className="heroLeft">
          <p className="smallText">The crypto wallet that’ll take you places</p>
          <h1>Your trusted companion</h1>
          <p className="heroText">
            A simple wallet style landing page inspired by Phantom.
            Clean layout, soft colors and easy beginner React structure.
          </p>
          <button className="mainBtn">Download Phantom</button>
        </div>

        <div className="heroRight">
          <div className="phoneCard">
            <div className="phoneTop"></div>
            <div className="balanceBox">
              <p>Total Balance</p>
              <h2>$12,480</h2>
            </div>

            <div className="tokenList">
              <div className="tokenRow">
                <span>Solana</span>
                <span>4.25 SOL</span>
              </div>
              <div className="tokenRow">
                <span>Ethereum</span>
                <span>1.18 ETH</span>
              </div>
              <div className="tokenRow">
                <span>Bitcoin</span>
                <span>0.12 BTC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="intro">
        <h2>Keep everything in one place</h2>
        <p>
          Multiple chains, one wallet. Simple design, clean sections and a modern crypto style.
        </p>
      </section>

      <section className="cards">
        <div className="card">
          <h3>Your wallet</h3>
          <p>Multiple chains, one wallet. No more switching.</p>
          <p>Access NFT marketplaces easily.</p>
          <p>Show your collection in one place.</p>
          <p>Check activity and transactions anytime.</p>
        </div>

        <div className="card">
          <h3>Your web3 tools</h3>
          <p>Swap tokens quickly and easily.</p>
          <p>Store, stake and earn rewards.</p>
          <p>Manage NFTs with simple actions.</p>
          <p>Sell in just a few clicks.</p>
        </div>

        <div className="card">
          <h3>Your security</h3>
          <p>You control your funds.</p>
          <p>Private by design.</p>
          <p>Scam detection helps protect transactions.</p>
          <p>Extra safety with Ledger support.</p>
        </div>
      </section>

      <section className="featureSection">
        <div className="featureText">
          <p className="purpleMini">Wallet</p>
          <h2>Simple and powerful</h2>
          <p>
            Beginner friendly layout with rounded cards, soft shadows and a purple color style
            close to the Phantom feeling.
          </p>
        </div>

        <div className="featureBox">
          <div className="miniCard">
            <h4>Fast swaps</h4>
            <p>Low fee style cards and quick actions</p>
          </div>
          <div className="miniCard">
            <h4>NFT support</h4>
            <p>Collections, previews and clean wallet UI</p>
          </div>
          <div className="miniCard">
            <h4>Private wallet</h4>
            <p>Simple design focused on user control</p>
          </div>
        </div>
      </section>

      <section className="bigBanner">
        <div className="bannerInside">
          <p className="smallText">Trusted by millions</p>
          <h2>Download Phantom to get started</h2>
          <p>
            Clean call to action section like the real website style with a big rounded block.
          </p>
          <button className="mainBtn">Download</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footerTop">
          <div className="footerLogo">Phantom</div>
          <p>Sign up for our newsletter and join the growing Phantom community.</p>
        </div>

        <div className="footerGrid">
          <div className="footerCol">
            <h4>Product</h4>
            <a href="">Download</a>
            <a href="">Security</a>
            <a href="">Support</a>
            <a href="">Feature Requests</a>
          </div>

          <div className="footerCol">
            <h4>Resources</h4>
            <a href="">Explore</a>
            <a href="">Learn</a>
            <a href="">Blog</a>
            <a href="">Docs</a>
          </div>

          <div className="footerCol">
            <h4>Company</h4>
            <a href="">About</a>
            <a href="">Careers</a>
            <a href="">Press Kit</a>
          </div>

          <div className="footerCol">
            <h4>Socials</h4>
            <a href="">X</a>
            <a href="">LinkedIn</a>
            <a href="">Instagram</a>
            <a href="">YouTube</a>
          </div>
        </div>

        <div className="footerBottom">
          <p>© Phantom 2025</p>
          <div className="bottomLinks">
            <a href="">Terms</a>
            <a href="">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App