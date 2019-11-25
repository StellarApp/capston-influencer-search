import axios from "axios";
import { SET_AUTH } from "./constants";

const attemptToLogin = (accessToken, user) => async dispatch => {
  const user = (await axios.post("/auth/facebook/add", user)).data;
  dispatch({ type: SET_AUTH, auth: {accessToken, user} });
  history.push("/");
};

export { attemptToLogin };
