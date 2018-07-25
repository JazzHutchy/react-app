import React, { Component } from "react"
import "./App.css"
import logo from "./logo.svg"

class App extends Component {
  render() {
    return (
      <div id="container">
        <aside id="sidebar">
          Users
          <div id="logo-box">
            <img src={logo} id="App-logo" alt="logo" />
          </div>
        </aside>
        <section id="main">
          <section id="messages-list">Messages list</section>
          <section id="new-message">New message</section>
        </section>
      </div>
    )
  }
}

export default App
