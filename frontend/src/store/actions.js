import axios from "axios";
import { SET_AUTH, DELETE_AUTH } from "./constants";

const attemptToLogin = (auth, history) => async dispatch => {
  (await axios.post("/auth/facebook/", auth.user)).data;
  dispatch({
    type: SET_AUTH,
    auth
  });
  history.push("/");
};

const logout = history => async dispatch => {
  dispatch({
    type: DELETE_AUTH,
    auth: {}
  });
  history.push("/");
};

export { attemptToLogin, logout };
