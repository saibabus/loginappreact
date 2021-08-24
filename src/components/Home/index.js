// Write your code here
import {Component} from 'react'

import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {islogginstatus: false}

  onClickbutton = () => {
    this.setState(prevstate => ({islogginstatus: !prevstate.islogginstatus}))
  }

  render() {
    const {islogginstatus} = this.state

    return (
      <div className="loginapp_bg">
        <div className="logincontainer">
          <Message islogginstatus={islogginstatus} />
          {islogginstatus ? (
            <Logout onclicklogout={this.onClickbutton} />
          ) : (
            <Login onclicklogin={this.onClickbutton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
