// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClicked = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="card">
        <h1 className="heading">
          The Button has been clicked <span className="value">{count}</span>{' '}
          times
        </h1>
        <p className="para">click the button to increase the count!</p>
        <button type="button" className="button1" onClick={this.onClicked}>
          click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
