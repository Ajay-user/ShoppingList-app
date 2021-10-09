import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// css
import "./App.css";

// components and pages
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.jsx";
import Shop from "./pages/shop/shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.page";
// actions
import { setCurrentUser } from "./redux/user/user.actions";

// selectors
import { selectCurrentUser } from "./redux/user/user.selectors";

// firebase
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";

class App extends React.Component {
  // unsubscribe from auth
  unSubscribeFromAuth = null;

  // check for auth state changes
  componentDidMount() {
    // get the action from props
    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // if userAuth is new this will store it in the firestore and return userRef
        // if userAuth already exist then we do nothing just return the userRef
        const userRef = await createUserProfileDocument(userAuth);
        // we listen for any changes to the data
        // we will get back the first state of the data anyway
        // we use this data to update the state of our app
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        // if user logs out set the state to null
        setCurrentUser(userAuth);
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
        <Header />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route
            exact
            path="/login"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
          <Route exact path="/checkout" component={CheckoutPage}></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
