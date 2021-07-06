import React, { Component } from "react"
import "./App.css"

class App extends Component {
  state = {
    name: "Rohan",
  }

  changeName = (newName) => {
    this.setState({
      name: newName,
    })
  }
  changeNameFromInput = (event) => {
    this.setState({
      name: event.target.value,
    })
  }

  render() {
    return (
      <div className="App">
        <br /> <br />
        <button onClick={() => this.changeName("Jordan")}>
          Change State using anonymous Function
        </button>
        <button onClick={this.changeName.bind(this, "Jordanian")}>
          Change State using bind Function
        </button>
        <br /> <br />
        <input
          type="text"
          onChange={this.changeNameFromInput}
          value={this.state.name}
        />
        <div>{this.state.name}</div>
      </div>
    )
  }
}

export default App
