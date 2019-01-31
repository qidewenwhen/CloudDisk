import React, { Component } from 'react';
import LoginForm from './Components/LoginForm';
import MainPanel from './Components/MainPanel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true
    }

    this.switchOnClick = this.switchOnClick.bind(this);
  }

  switchOnClick() {
    this.setState({
      login: !this.state.login
    })
  }

  render() {
    var content;
    if (this.state.login) {
      content = <MainPanel title = "index"/>;
    } else {
      content = <LoginForm />;
    }

    return (
      <div>
        <button onClick = { this.switchOnClick }>Switch</button>
        { content }
      </div>
    )
  }
}

export default App;
