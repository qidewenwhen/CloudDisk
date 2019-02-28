import React, { Component } from 'react';
import './App.css';
import LoginForm from './Components/LoginForm';
import MainPanel from './Components/MainPanel';
import Navbar from 'react-bootstrap/lib/Navbar';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';
import Api from './Logic/Api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
    }
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(data) {
    Cookies.set('token', data.token, { expires: 7 });
    this.setState({
      login: true
    });
  }

  componentDidMount() {
    var token = Cookies.get('token');
    if (token) {
      Api.auth(token).then(response => {
        if (response.ok) {
          this.setState({
            login: true
          });
        }
      });
    }
  }

  render() {
    var content;
    if (this.state.login) {
      content = <MainPanel title = "index"/>;
    } else {
      content = <LoginForm onLogin = { this.onLogin }/>;
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
