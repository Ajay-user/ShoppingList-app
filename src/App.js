import { Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.jsx";
import Shop from "./pages/shop/shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { auth, createUserProfileDocument } from "./firebase/firebase-utils";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }

  // unsubscribe from auth
  unSubscribeFromAuth = null;

  // check for auth state changes
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // if userAuth is new this will store in the firestore and return userRef
        // if userAuth already exist then we do nothing just return the userRef
        const userRef = await createUserProfileDocument(userAuth);
        // we listen for any changes to the data
        // we will get back the first state of the data anyway
        // we use this data to update the state of our app
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: { id: snapshot.id, ...snapshot.data() },
          });
        });
      } else {
        // if user logs out set the state to null
        this.setState({ currentUser: null });
      }
    });
  }
  // close the subscribtion when component unmounts
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/login" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
