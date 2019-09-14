import React, { Component } from 'react';

class App extends Component {

  state = {
    stuff: []
  }
  
  render() {
    return (
      this.state.stuff.map(stf => {
        return(
          <h1 key={stf}>
            {stf}
          </h1>
        )
      })
    );
  }

  componentDidMount(){
    fetch('http://localhost:60089/api/values')
      .then(res => res.json())
      .then((data) => {
      this.setState({ stuff: data })})
      .catch(console.log)
  }
}

export default App;