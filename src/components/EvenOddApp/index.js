import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
    status: 'Count is Even',
  }

  onIncrement = () => {
    const {count, status} = this.state
    const randomNumber = Math.random() * 100

    this.setState(prevState => ({
      count: prevState.count + Math.ceil(randomNumber),
    }))
  }

  render() {
    const {count, status} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="head-count">Count {count}</h1>
          {count % 2 === 0 ? (
            <p className="number-status">Count is Even</p>
          ) : (
            <p className="number-status">Count is Odd</p>
          )}
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
