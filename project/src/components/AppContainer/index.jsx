/**
 * Created by synerzip on 04/07/17.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderComponent from 'components/Header';
import BodyContainer from 'components/BodyContainer';

class AppContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      screenName: null,
      loggedInUser: false
    };
   // this.onChangeScreen = this.onChangeScreen.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  /*onChangeScreen(newName) {
    this.setState({screenName: newName});
  }*/

  checkLogin(username, password) {
    if (username === 'demo' && password === 'demo') {
      this.setState({loggedInUser: true});
     // this.onChangeScreen('Employee');
      alert("Success");
    } else {
      this.setState({loggedInUser: false});
      //this.onChangeScreen('Login');
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <HeaderComponent
            changeScreenName={this.onChangeScreen}
          />
          <BodyContainer
            screenName={this.state.screenName}
            checkLogin={this.checkLogin}
            loggedInUser={this.state.loggedInUser}/>
        </div>
      </MuiThemeProvider>);
  }
}

export default AppContainer;
