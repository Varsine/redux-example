import React from "react"
import {connect} from "react-redux"

class MyProps extends React.Component {
  render() {
    return (
      <div className="my-props">
        <h1>This is my redux store.</h1>
        <div>
          Cars: <span>{this.props.car}</span>
          <hr />
          Phone:<span>{this.props.phone}</span>
        </div>
      </div>
    )
  }
}
const stateProps = state => {
  return {
    car: state.car[0],
    phone: state.phone[0]
  }
}

export default connect(stateProps)(MyProps)
