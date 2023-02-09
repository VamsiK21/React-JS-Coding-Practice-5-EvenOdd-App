// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNo = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNo()

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Count {count}</h1>

          <div className="btn-container">
            <p className="text">Count is {displayText}</p>
            <button type="button" onClick={this.onIncrement} className="button">
              Increment
            </button>
            <p className="note-text">
              <sup>*</sup>Increase By Random Number Between 0 to 100
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
