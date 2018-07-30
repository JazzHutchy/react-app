import React, { Component } from "react"
import "./App.css"
import Sidebar from "./components/Sidebar"
import MessagesList from "./components/MessagesList"
import AddMessage from "./components/AddMessage"
// import logo from "./logo.svg"

class App extends Component {
  render() {
    return (
      <div id="container">
        <Sidebar />
        <section id="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    )
  }
}

export default App
