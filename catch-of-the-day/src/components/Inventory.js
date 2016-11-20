import React, { Component } from 'react'
import AddFishForm from './AddFishForm'

class Inventory extends Component {
  constructor() {
    super()
    this.renderInventory = this.renderInventory.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e, key) {
    const fish = this.props.fishes[key]
    const updatedFish = {
      ...fish,
      [e.target.name]: e.target.value,
    }
    this.props.updateFish(key, updatedFish)
  }
  renderInventory(key) {
    const fish = this.props.fishes[key]
    return (
      <div className="fish-edit" key={key}>
        <input
          type="text"
          name="name"
          placeholder="Fish Name"
          defaultValue={ fish.name }
          onChange={ (e) => this.handleChange(e, key) }
        />
        <input
          type="text"
          name="price"
          placeholder="Fish Price"
          defaultValue={ fish.price }
          onChange={ (e) => this.handleChange(e, key) }
        />
        <select
          name="status"
          defaultValue={ fish.status }
          onChange={ (e) => this.handleChange(e, key) }
        >
          <option defaultValue="available">Fresh!</option>
          <option defaultValue="unavailable">Sold Out!</option>
        </select>
        <textarea
          type="text"
          name="desc"
          placeholder="Fish Desc"
          defaultValue={ fish.desc }
          onChange={ (e) => this.handleChange(e, key) }
        ></textarea>
        <input
          type="text"
          name="image"
          placeholder="Fish Image"
          defaultValue={ fish.image }
          onChange={ (e) => this.handleChange(e, key) }
          />
      </div>
    )
  }
  render() {
    return (
      <div>
        <h2>Inventory</h2>
        <AddFishForm addFish={ this.props.addFish }/>
        { Object.keys(this.props.fishes).map(this.renderInventory) }
        <button onClick={ this.props.loadSamples }>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory
