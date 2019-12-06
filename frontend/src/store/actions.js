import axios from "axios";
import {
  SET_AUTH,
  DELETE_AUTH,
  SET_CREATORS,
  UPDATE_CREATOR,
  DELETE_CREATOR,
  SET_BUSINESS,
  UPDATE_BUSINESS,
  DELETE_BUSINESS,
  SET_COLLECTIONS,
  ADD_COLLECTION,
  DELETE_COLLECTION
} from "./constants";

const attemptFBLogin = (auth, history) => async dispatch => {
  const creator = (await axios.post("/auth/facebook/", auth)).data;
  dispatch({
    type: SET_AUTH,
    auth: {
      ...creator,
      token: auth.token
    }
  });
  history.push(creator.isNew ? "/onboarding/keywords" : "/account");
};

const logout = history => async dispatch => {
  dispatch({
    type: DELETE_AUTH,
    auth: {}
  });
  history.push("/");
};

const fetchCreators = () => async dispatch => {
  const creators = (await axios.get("/api/creators")).data;
  dispatch({
    type: SET_CREATORS,
    creators
  });
};

const createCreatorInsight = (creatorInsight, history) => async dispatch => {
  const created = (await axios.post("api/creatorinsights", { creatorInsight }))
    .data;
  dispatch({ type: CREATE_CREATORINSIGHT, creatorInsight: created });
  history.push("/account");
};

const fetchCollections = businessId => async dispatch => {
  const collections = (await axios.get(`api/business/${businessId}/collections/`)).data;
  dispatch({
    type: SET_COLLECTIONS,
    collections
  });
};

const handleDeleteCollection = (collectionId) => async dispatch => {
  (await axios.delete(`api/business/${collectionId}`))
  dispatch({
    type:  DELETE_COLLECTION,
    collection: {id: collectionId}
  })
}


export { attemptFBLogin, logout, fetchCreators, createCreatorInsight, fetchCollections, handleDeleteCollection };
