import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {
    number: 0,
  }

  onIncrement = () => {
    const random = Math.ceil(Math.random() * 100)
    this.setState(prevNumber => ({number: prevNumber.number + random}))
  }

  render() {
    const {number} = this.state
    const evenOdd = number % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container">
        <div className="App-container">
          <h1 className="heading">Count {number} </h1>
          <div className="button-container">
            <p className="even-add-heading">Count is {evenOdd}</p>
            <button
              type="button"
              className="increment-button"
              onClick={this.onIncrement}
            >
              Increment
            </button>
            <p className="description">
              *increase By Random Number Between 0 to 100
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
