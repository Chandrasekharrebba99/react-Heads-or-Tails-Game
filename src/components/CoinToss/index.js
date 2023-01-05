// Write your code here

import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    Total: 0,
    Heads: 0,
    Tails: 0,
    imageSrc: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  rollCoin = () => {
    const num = Math.floor(Math.random() * 2)
    const {Total, Tails, Heads} = this.state
    if (num === 1) {
      this.setState({
        Total: Total + 1,
        Tails: Tails + 1,
        imageSrc: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    } else {
      this.setState({
        Total: Total + 1,
        Heads: Heads + 1,
        imageSrc: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    }
  }

  render() {
    const {Total, Heads, Tails, imageSrc} = this.state

    return (
      <div className="top_cont">
        <div className="card">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={imageSrc} alt="toss result" />

          <div>
            <button type="button" onClick={this.rollCoin}>
              Toss Coin
            </button>
          </div>

          <div className="output">
            <div className="disrow">
              <p>Total:{Total}</p>
            </div>
            <div className="disrow">
              <p>Heads: {Heads} </p>
            </div>
            <div className="disrow">
              <p>Tails: {Tails}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
