import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import 'typeface-pacifico';
import 'lato-font';

import GoogleLogin from '../Common/GoogleLogin';
import { signIn, isSignedIn } from '../../utils/userState';
import styles from './Landing.css';

const GOOGLE_CLIENT_ID = '504091725586-unbetrucfjvg8serl4u4buv8i78vl6tn.apps.googleusercontent.com';
const SCOPE = 'profile email';
const GOOGLE_SIGN_IN_ERRORS = {
  idpiframe_initialization_failed: 'Enable third party cookies and reload the page',
  popup_closed_by_user: 'Please keep the popup window open until sign in flow is complete',
  access_denied: 'Please allow permissions for Event Aggregators to function properly',
  immediate_failed: 'Please sign into a google account in order to use Octograde'
};

class Landing extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.containerHome}>
          <h1 className={styles.logoText}>CU Hack IV</h1>
          <h1 className={styles.motto}>Policy by the people for the people.</h1>
          <h2 className={styles.homeText}>Some really cool stuff...</h2>
          <div className={styles.signInButton}>
            <GoogleLogin
              clientId={GOOGLE_CLIENT_ID}
              onSuccess={this.onSuccess}
              onFailure={this.onFailure}
              alreadyAuthenticated={this.alreadyAuthenticated}
              scope={SCOPE}
              offline={false}
            >
              <span>Login with Google</span>
            </GoogleLogin>
          </div>
        </div>
        <div className={styles.homeFooter}>
          <p>&#169; Copyright Something 2018</p>
        </div>
      </div>
    );
  }

  alreadyAuthenticated = () => {
    if (isSignedIn()) {
      this.props.history.push('/topics');
    }
  }

  onSuccess = async ({ tokenId }) => {
    try {
      console.log(tokenId);
      const { data } = await this.props.mutate({
        variables: {
          token: tokenId
        }
      });
      signIn(data.userAuth);
      this.props.history.push('/topics');
    } catch (error) {
      console.error(error);
    }
  };

  onFailure = ({ error }) => {
    console.log(GOOGLE_SIGN_IN_ERRORS[error]);
  };
}

const UserAuthMutation = gql`
  mutation userAuth($token: String!) {
    userAuth(token: $token) {
      user {
        id
        email
        name
        imageUrl
      }
      token
    }
  }
`;

export default graphql(UserAuthMutation)(Landing);
