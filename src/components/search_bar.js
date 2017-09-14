import React, {Component} from 'react'

class SearchBar extends Component {
  // State is a plain JS object that is used to record and react to user events
  constructor(props) {
    super(props)

    this.state = { term: 'starting value' }
  }

  render() {
    return (
      <div>
        <input
          value = {this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    )
  }
}

export default SearchBar
