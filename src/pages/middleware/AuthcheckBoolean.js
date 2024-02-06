const AuthCheckBoolean = () => {
  let loggedIn = false;

  if (localStorage.getItem("loggedIn")) {
    loggedIn = true;
  }

  return loggedIn;
};

export default AuthCheckBoolean;
