import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
  listStyleType: "none",
}
const listItemStyles = {
  marginBottom: 12,
  fontWeight: "300",
  letterSpacing: 1,
}
const linkStyles = {
  color: "#8954A8",
}

// data
const links = [
  {
    text: "Documentation",
    url: "https://www.gatsbyjs.com/docs/",
  },
  {
    text: "Tutorials",
    url: "https://www.gatsbyjs.com/tutorial/",
  },
  {
    text: "Guides",
    url: "https://www.gatsbyjs.com/tutorial/",
  },
  {
    text: "API Reference",
    url: "https://www.gatsbyjs.com/docs/api-reference/",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
  },
  {
    text: "Cheat Sheet",
    url: "https://www.gatsbyjs.com/docs/cheat-sheet/",
  },
]

// markup
const IndexPage = () => {
  return (
    <>
    <header style={{ paddingTop: '5px'}}>
      <a src="/" style={{ marginRight: '20px'}}>Home Page</a>
      <a src="/portfolio">Portfolio</a>
    </header>
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
      I'm Michael Eclavea, <span><h5>A Software Developer</h5></span>
      </h1>

      <div id="projects">
      <h3>Projects:</h3>
      <h4><a href="https://the-art-of-magic-the-gathering.herokuapp.com/">The Art of Magic The Gathering</a></h4>
      <p>A creative application that allows users to search for artwork from The Magic the Gathering cards.</p>
      <p> Built with JavaScript, HTML, CSS, jQuery, Node.js, Express.js, Photoshop, postgreSQL & integrated with The Magic The Gathering API.</p>

      <br/>

      <h4><a href="https://my-quick-pick.herokuapp.com/">MyQuickPick</a></h4>
      <p>An application that is designed to allow people to better tailor their lotto quick picks to a more specified range.</p>
      <p>Built with React.js, JavaScript, HTML, CSS, Node.js, node-sass and jest.</p>
      <br/>

      <h4><a href="https://kmac1027.github.io/escape-room-game/">Escape Room</a></h4>
      <p>An interactive escape room game that allows the user to move through different levels.</p>
      <p>Built with JavaScript, HTML, CSS, jQuery using industry standards and best practices for client-side web apps</p>
      <br/>

      <h4><a href="https://github.com/code-heros-quest/battle-for-the-kingdom">Code Quest: Battle for the Kingdom</a></h4>
      <p>An extensive terminal text based game. Users are able to download and play right inside their terminal. Dynamic outcomes and events throughout the game.</p>
      <p>Built with JavaScript, HTML, CSS, Node.js, Express, chalk, jest, inquirer and socket.io.</p>
      <br/>
      
      </div>
      <div>
        
      </div>
    </main>
    </>
  )
}

export default IndexPage
