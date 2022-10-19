// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {time: '25:00', text: 'Start', isTimerRunning: false}

  render() {
    const {time, text, isTimerRunning} = this.state
    console.log(isTimerRunning)

    return (
      <div className="app-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="content-container">
          <div className="timer-container">
            <div className="timer">
              <p className="time">{time}</p>
              <p className="text">Paused</p>
            </div>
          </div>
          <div className="actions">
            <div className="play-buttons">
              <button
                type="button"
                className="each-button"
                onClick={this.onClickStartOrStop}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                  alt="play"
                  className="each-button"
                />
              </button>

              <p>{text}</p>
              <button type="button" className="each-button">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset"
                  className="each-button"
                />
              </button>

              <p>Reset</p>
            </div>
            <div className="timer-limit-container">
              <p>Set Timer Limit</p>
              <div className="timer-buttons">
                <button type="button" className="value-button">
                  -
                </button>
                <div className="timer-set-value">
                  <p>25</p>
                </div>
                <button type="button" className="value-button">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
