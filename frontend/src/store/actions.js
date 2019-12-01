import axios from "axios";
import { 
  SET_AUTH,
  DELETE_AUTH,
  SET_CREATORS,
  CREATE_CREATOR,
  UPDATE_CREATOR,
  DELETE_CREATOR,
  SET_BUSINESS,
  CREATE_BUSINESS,
  UPDATE_BUSINESS,
  DELETE_BUSINESS,
} from "./constants";

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
