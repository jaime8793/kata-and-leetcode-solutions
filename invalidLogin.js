function validate(username, password) {
  const splitedPassword = password.split("//");
  const splitedPassword2 = password.split("||");
  console.log(splitedPassword2, splitedPassword);
  if (splitedPassword.length === 2 || splitedPassword2.length === 2) {
    return "Wrong username or password!";
  } else {
    var database = new Database();
    return database.login(username, password);
  }
}

// validate("Timmy", 'password"||""=="');
validate("Timmy", "password");
