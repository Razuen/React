import UserService from "../../services/UserService";

function Login() {
  const login = async (username, password) => {
    let response = await UserService.login(username, password);
    return response;
  };

  const getUserDetails = () => {
    let username = window.prompt("Enter Username");
    let password = window.prompt("Enter Password");
    return login(username, password);
  };
  return login("nijin", "password");
}

export default Login;
