import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
// Configure Firebase.
const config = {
  apiKey: "AIzaSyD7ywgrRVFq1J_2Zl_ICAV66R8H9beyvhQ",
  authDomain: "datea-3b516.firebaseapp.com",
  databaseURL: "https://datea-3b516.firebaseio.com",
  projectId: "datea-3b516",
  storageBucket: "datea-3b516.appspot.com"
};
firebase.initializeApp(config);
class App extends React.Component {
  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };
  //andres modifica como crees que es por fis
  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    signInSuccessUrl: '/app/dashboard/dashboard' ,
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };
  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
  render() {
    if (this.state.isSignedIn) {
      return (
        <div>
          <h1>My App</h1>
          <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
          <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
        </div>
      );
    }
    return (
      <div>
        <h1>  </h1>
        <p>:</p>
        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    );
  }
}
export default App;

import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';
const Dashboard = ({match}) => (
  <div className="app-wrapper">
    <Switch>
      {/* <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`}/> */}
      <Route exact path={`${match.url}/dashboard`} component={asyncComponent(() => import('./routes/Dashboard'))}/>
      <Route component={asyncComponent(() => import('app/routes/extraPages/routes/404'))}/>
    </Switch>
  </div>
);
export default Dashboard;