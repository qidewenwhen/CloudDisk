import React, { Component } from 'react';
import './App.css';
import LoginForm from './Components/LoginForm';
import MainPanel from './Components/MainPanel';
import Navbar from 'react-bootstrap/lib/Navbar';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
    }
  }

  render() {
    var content;
    if (this.state.login) {
      content = <MainPanel title = "index"/>;
    } else {
      content = <LoginForm />;
    }
    return (
      <Grid>
        <Row>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href = "/">CloudDisk</a>
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>
          {content}
        </Row>
      </Grid>
    );
  }
}

export default App;
