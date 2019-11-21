import axios from "axios";
import { CREATE_USER } from "./constants";

const register = (newUser, history) => async dispatch => {
  const user = (await axios.post("/register", newUser)).data;
  dispatch({ type: CREATE_USER, user });
  history.push("/");
};

export { register };
