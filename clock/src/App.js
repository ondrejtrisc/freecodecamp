import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerLabel: 'session',
      timeLeft: 25 * 60,
      running: false,
      timer: null,
    };

    this.timeFormat = time => {
      let mins = Math.floor(time / 60);
      if (mins < 10) {
        mins = '0' + mins.toString();
      }
      else {
        mins = mins.toString();
      }
      let secs = time % 60;
      if (secs < 10) {
        secs = '0' + secs.toString();
      }
      else {
        secs = secs.toString();
      }
      return mins + ':' + secs;
    }

    this.breakDecrement = () => {
      this.setState(state => { 
        if (state.breakLength > 1 && !state.running) {
          return {
            breakLength: state.breakLength - 1,
          };        
        }
        else {
          return {};
        }
      });
    };

    this.breakIncrement = () => {
      this.setState(state => {
        if (state.breakLength < 60 && !state.running) {
          return {
            breakLength: state.breakLength + 1,
          };
        }
        else {
          return {};
        }
      });
    };

    this.sessionDecrement = () => {
      this.setState(state => {
        if (state.sessionLength > 1 && !state.running) {
          return {
            sessionLength: state.sessionLength - 1,
            timeLeft: (state.sessionLength - 1) * 60,
          };        
        }
        else {
          return {};
        }
      });
    };

    this.sessionIncrement = () => {
      this.setState(state => {
        if (state.sessionLength < 60 && !state.running) {
          return {
            sessionLength: state.sessionLength + 1,
            timeLeft: (state.sessionLength + 1) * 60,
          };
        }
        else {
          return {};
        }
      });
    };

    this.decrementTime = () => {
      this.setState(state => {
        if (state.timeLeft > 0) {
          return {
            timeLeft: state.timeLeft - 1,
          };
        }
        else {
          document.getElementById('beep').play();
          if (state.timerLabel === 'session') {
            return {
              timerLabel: 'break',
              timeLeft: state.breakLength * 60,
            };
          }
          else {
            return {
              timerLabel: 'session',
              timeLeft: state.sessionLength * 60,
            };
          }
        }
      });
    };

    this.startStop = () => {
      if (this.state.running) {
        clearInterval(this.state.timer);
        this.setState({
          running: false,
          timer: null,
        });
      }
      else {
        const timerID = setInterval(this.decrementTime, 1000);
        this.setState({
          running: true,
          timer: timerID,
        });
      }
    };

    this.reset = () => {
      document.getElementById('beep').pause();
      document.getElementById('beep').load();
      this.setState(state => {
        if (state.timer !== null) {
          clearInterval(state.timer);
        }
        return {
          breakLength: 5,
          sessionLength: 25,
          timerLabel: 'session',
          timeLeft: 25 * 60,
          running: false,
          timer: null,
        };
      });
    };
  }

  render() {
    return (
      <div className="App">
        <div className="lengths">
          <div className="length">
            <div id="break-label">Break Length</div>
            <span className="length-line">
              <div id="break-decrement" onClick={this.breakDecrement}>&#x2B07;</div>
              <div id="break-length">{this.state.breakLength}</div>
              <div id="break-increment" onClick={this.breakIncrement}>&#x2B06;</div>
            </span>
          </div>
          <div className="length">
            <div id="session-label">Session Length</div>
            <span className="length-line">
              <div id="session-decrement" onClick={this.sessionDecrement}>&#x2B07;</div>
              <div id="session-length">{this.state.sessionLength}</div>
              <div id="session-increment" onClick={this.sessionIncrement}>&#x2B06;</div>
            </span>
          </div>
        </div>
        <div id="timer">
          <div id="timer-label">{this.state.timerLabel}</div>
          <div id="time-left">{this.timeFormat(this.state.timeLeft)}</div>
        </div>
        <div id="control">
          <div id="start_stop" onClick={this.startStop}>start/stop</div>
          <div id="reset" onClick={this.reset}>reset</div>
        </div>
        <audio id="beep" src="http://soundbible.com/mp3/Annoying_Alien_Buzzer-Kevan-1659966176.mp3"></audio>
      </div>
    );
  }
}

export default App;
