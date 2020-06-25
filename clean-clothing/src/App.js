import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { selectCurrentUser } from './redux/user/user.selector';

import './App.css';

class App extends React.Component {
unsubcribeFromAuth = null;
  
componentDidMount() {

  // this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //   if (userAuth) {
  //     const userRef = await createUserProfileDocument(userAuth);

  //     userRef.onSnapshot(snapShot => {
  //       setCurrentUser({
  //           id: snapShot.id,
  //           ...snapShot.data()
  //         })
  //     })
  //   }

  //   setCurrentUser(userAuth);
    // });
}

componentWillUnmount() {
  this.unsubcribeFromAuth();
}


  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/checkout' component={CheckoutPage}/>
          <Route 
          exact 
          path='/signin' 
          render={() => 
          this.props.currentUser ? (
          <Redirect to='/'/>
          ) : (
            <SignInAndSignUpPage />
            )
          }
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})



export default connect(mapStateToProps)(App);
