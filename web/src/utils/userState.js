const USER_KEY = 'eventAppUser';
const TOKEN_KEY = 'eventAppToken';
const GOOGLE_CLIENT_ID = '651469506426-0d2fvpdp5t11coeb7lihtk0acau5qe72.apps.googleusercontent.com';

function loadGoogleLibrary() {
  return new Promise((resolve, reject) => {
    ((d, s, id, cb) => {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      js = d.createElement(s);
      js.id = id;
      js.src = '//apis.google.com/js/client:platform.js';
      fjs.parentNode.insertBefore(js, fjs);
      js.onload = cb;
    })(document, 'script', 'google-login', () => {
      const params = {
        client_id: GOOGLE_CLIENT_ID,
        cookiepolicy: 'single_host_origin',
        login_hint: null,
        hosted_domain: null,
        fetch_basic_profile: null,
        discoveryDocs: null,
        ux_mode: 'popup',
        redirect_uri: null,
      };
      window.gapi.load('auth2', () => {
        window.gapi.auth2.init(params).then(
          () => resolve(),
          err => reject(err)
        );
      });
    });
  });
}

export function signIn({ token, user }) {
  setUser(user);
  setToken(token);
}

export async function signOut() {
  try {
    if (!window.gapi.auth2) {
      await loadGoogleLibrary();
    }
    const auth2 = window.gapi.auth2.getAuthInstance();
    await auth2.signOut();
    removeUser();
    removeToken();
  } catch (error) {
    console.error(error);
  }
}

export function isSignedIn() {
  const user = getUser();
  return user ? user : false;
}

export function getUser() {
  let storageObj = localStorage.getItem(USER_KEY);
  return storageObj ? JSON.parse(storageObj) : undefined;
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

function setUser(userObj) {
  localStorage.setItem(USER_KEY, JSON.stringify(userObj));
}

function removeUser() {
  localStorage.removeItem(USER_KEY);
}

function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}