const getAuth = () => {
  return true;  // temp: will need better auth when connecting to API
}

const auth = (nextState, replace, next) => {
  if (!getAuth) {
    replace({
      pathname: "/login",
      state: {nextPathname: nextState.location.pathname}
    });
  }
  next();
}

export default auth;
