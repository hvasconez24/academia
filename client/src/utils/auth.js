import decode from 'jwt-decode';

class AuthService {
  //get user data
  getProfile() {
    return decode(this.getToken());
  }

  //check if the user is logged
  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  //if token expired check
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }


  //sign out
  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.assign('/');
  }

  
  //get user token from localStorage
  getToken() {

    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  //if loggin redirect
  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);

    window.location.assign('/');
  }

}

export default new AuthService();
