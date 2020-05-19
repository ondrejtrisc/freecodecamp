import React from 'react';
import './App.css';

class Pad extends React.Component {
  constructor(props) {
    super(props);

    this.source = id => {
      switch (id) {
        case 'Q': return 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3';
        case 'W': return 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3';
        case 'E': return 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3';
        case 'A': return 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3';
        case 'S': return 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3';
        case 'D': return 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3';
        case 'Z': return 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3';
        case 'X': return 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3';
        case 'C': return 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3';
        default: return '';
      }
    }

    this.handleClick = () => {
      document.getElementById(this.props.id).play();
      this.props.setDisplay(this.props.id);
    };
  }

  render() {
    return (
      <div className="drum-pad" id={'pad-' + this.props.id} onClick={this.handleClick}>
        {this.props.id}
        <audio src={this.source(this.props.id)} className="clip" id={this.props.id}></audio>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: ''
    };

    this.handleKeyPress = event => {
      document.getElementById(event.key.toUpperCase()).play();
      this.setDisplay(event.key.toUpperCase());
    };

    this.setDisplay = src => {
      this.setState({
        display: src
      });
    };
  }

  render() {

    document.addEventListener('keydown', this.handleKeyPress);

    return (
      <div id="drum-machine">
        <div id="pad-container">
          <Pad id="Q" setDisplay={this.setDisplay} />
          <Pad id="W" setDisplay={this.setDisplay} />
          <Pad id="E" setDisplay={this.setDisplay} />
          <Pad id="A" setDisplay={this.setDisplay} />
          <Pad id="S" setDisplay={this.setDisplay} />
          <Pad id="D" setDisplay={this.setDisplay} />
          <Pad id="Z" setDisplay={this.setDisplay} />
          <Pad id="X" setDisplay={this.setDisplay} />
          <Pad id="C" setDisplay={this.setDisplay} />
        </div>
        <div id="display">{this.state.display}</div>
      </div>
    );
  }
}

export default App;
