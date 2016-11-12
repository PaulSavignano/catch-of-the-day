import React, { Component } from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes'

class App extends Component {
  constructor() {
    super()
    this.state = {
      fishes: {},
      orders: {},
    }
    this.addFish = this.addFish.bind(this)
    this.loadSamples = this.loadSamples.bind(this)
  }
  addFish(fish) {
    const fishes = { ...this.state.fishes }
    const timestamp = Date.now()
    fishes[`fish-${timestamp}`] = fish
    this.setState({ fishes: fishes })
    console.log(fishes)
  }
  loadSamples() {
    this.setState({
      fishes: sampleFishes,
    })
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order/>
        <Inventory addFish={ this.addFish } loadSamples={ this.loadSamples }/>
      </div>
    )
  }
}

export default App
