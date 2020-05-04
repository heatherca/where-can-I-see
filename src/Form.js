import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ""
    }
  }
   // takes text input and passes it to state also clears city counts once user starts typing something new 
  handleUinput = (event) => {
    this.setState({
      userInput: event.target.value,
      amsterdam: 0,
      boston: 0
    })
  }

  render() {
      return (
        <form action="" onSubmit={(e) => {
          this.props.handleSubmit(e, this.state.userInput)
          this.setState({
            userInput: "",
          })
        }
        }>
          <label htmlFor="searchArt" className="sr-only">Input query here</label>
          <input type="text" id="searchArt" value={this.state.userInput} onChange={this.handleUinput} placeholder="eg: lion, france, sun"></input>
          <button type="submit">Take a Look</button>
        </form>
      )
    }
  }



export default Form;