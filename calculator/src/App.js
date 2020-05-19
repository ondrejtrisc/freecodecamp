import React from 'react';
import './App.css';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.name = id => {
      switch (id) {
        case '1': return 'one';
        case '2': return 'two';
        case '3': return 'three';
        case '4': return 'four';
        case '6': return 'five';
        case '5': return 'six';
        case '7': return 'seven';
        case '8': return 'eight';
        case '9': return 'nine';
        case '0': return 'zero';
        case '.': return 'decimal';
        case '+': return 'add';
        case '-': return 'subtract';
        case '*': return 'multiply';
        case '/': return 'divide';
        case '=': return 'equals';
        case 'AC': return 'clear';
        default: return '';
      }
    }
  }

  render() {
    return (
      <div className="button" id={this.name(this.props.id)} onClick={() => {this.props.handleClick(this.props.id)}}>
        {this.props.id}
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      previous: null,
      display: 0,
      decimal: 0,
      operation: null,
      operationJustPressed: false,
      minus: false
    };

    this.handleClick = id => {
      switch (id) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '6':
        case '5':
        case '7':
        case '8':
        case '9':
        case '0':
          this.setState(state => {
            if (state.minus) {
              if (state.decimal === 0) {
                return {
                  display: state.display * 10 - Number(id),
                  operationJustPressed: false,
                };
              }
              else {
                return {
                  display: state.display - (Number(id) / Math.pow(10, state.decimal)),
                  decimal: state.decimal + 1,
                  operationJustPressed: false,
                }
              } 
            }
            if (state.decimal === 0) {
              return {
                display: state.display * 10 + Number(id),
                operationJustPressed: false,
              };
            }
            else {
              return {
                display: state.display + (Number(id) / Math.pow(10, state.decimal)),
                decimal: state.decimal + 1,
                operationJustPressed: false,
              }
            }
          });
        break;
        case '.':
          this.setState(state => {
            if (state.decimal === 0) {
              return {
                decimal: 1,
                operationJustPressed: false,
              }
            }
            else {
              return {};
            }
          });
        break;
        case '+':
        case '-':
        case '*':
        case '/':
          this.setState(state => {
            if (state.operationJustPressed) {
              if (id !== '-') {
                return {
                  operation: id
                };
              }
              else {
                return {
                  minus: true
                };
              }
            }
            else if (state.previous === null) {
              return {
                previous: state.display,
                display: 0,
                decimal: 0,
                operation: id,
                operationJustPressed: true,
              };
            }
            else {
              switch (state.operation) {
                case '+':
                  return {
                    previous: state.previous + state.display,
                    display: 0,
                    decimal: 0,
                    operation: id,
                    operationJustPressed: true,
                  };
                case '-':
                  return {
                    previous: state.previous - state.display,
                    display: 0,
                    decimal: 0,
                    operation: id,
                    operationJustPressed: true,
                  };
                case '*':
                  return {
                    previous: state.previous * state.display,
                    display: 0,
                    decimal: 0,
                    operation: id,
                    operationJustPressed: true,
                  };
                case '/': 
                  return {
                    previous: state.previous / state.display,
                    display: 0,
                    decimal: 0,
                    operation: id,
                    operationJustPressed: true,
                  };
              }
            }
          });
        break;
        case '=':
          this.setState(state => {
            if (state.previous === null) {
              return {};
            }
            else {
              switch (state.operation) {
                case '+':
                  return {
                    previous: null,
                    display: state.previous + state.display,
                    decimal: 0,
                    operationJustPressed: false,
                  };
                case '-':
                  return {
                    previous: null,
                    display: state.previous - state.display,
                    decimal: 0,
                    operationJustPressed: false,
                  };
                case '*':
                  return {
                    previous: null,
                    display: state.previous * state.display,
                    decimal: 0,
                    operationJustPressed: false,
                  };
                case '/': 
                  return {
                    previous: null,
                    display: state.previous / state.display,
                    decimal: 0,
                    operationJustPressed: false,
                  };
              }
            }
          });
        break;
        case 'AC':
          this.setState({
            previous: null,
            display: 0,
            decimal: 0,
            operation: null,
            operationJustPressed: false,
            minus: false,
          });
        break;
      }
    };
  }

  render() {
    return (
      <div className="App">
        <Button id="1" handleClick={this.handleClick} />
        <Button id="2" handleClick={this.handleClick} />
        <Button id="3" handleClick={this.handleClick} />
        <Button id="4" handleClick={this.handleClick} />
        <Button id="5" handleClick={this.handleClick} />
        <Button id="6" handleClick={this.handleClick} />
        <Button id="7" handleClick={this.handleClick} />
        <Button id="8" handleClick={this.handleClick} />
        <Button id="9" handleClick={this.handleClick} />
        <Button id="0" handleClick={this.handleClick} />
        <Button id="." handleClick={this.handleClick} />
        <Button id="+" handleClick={this.handleClick} />
        <Button id="-" handleClick={this.handleClick} />
        <Button id="*" handleClick={this.handleClick} />
        <Button id="/" handleClick={this.handleClick} />
        <Button id="=" handleClick={this.handleClick} />
        <Button id="AC" handleClick={this.handleClick} />
        <div id="display">{this.state.display}</div>
      </div>
    );
  }
}

export default App;
