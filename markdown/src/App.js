import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };

    this.handleChange = event => {
      this.setState({
        input: event.target.value
      });
    };
  }

  render() {
    return (
      <div className="App">
        <textarea id="editor" onChange={this.handleChange}>{this.state.input}</textarea>
        <div id="preview">
          {this.state.input}
        </div>
      </div>
    );
  }
}

export default App;
