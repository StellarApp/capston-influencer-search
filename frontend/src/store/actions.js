import axios from "axios";
import {
  SET_AUTH,
  ADD_TO_AUTH,
  DELETE_AUTH,
  SET_CREATORS,
  SET_COLLECTIONS,
  ADD_COLLECTION,
  DELETE_COLLECTION,
  SET_KEYWORDS,
  SET_SELECTED,
  TOGGLE_SELECTED
} from "./constants";

const attemptFBLogin = (auth, history) => async dispatch => {
  const creator = (await axios.post("/auth/facebook/", auth)).data;
  dispatch({
    type: SET_AUTH,
    auth: {
      ...creator,
      token: auth.token,
      type: "creator"
    }
  });
  history.push(creator.isNew ? "/onboarding/keywords" : "/account");
};

const getBusinessLogin = (id, token) => async dispatch => {
  const business = (await axios.get(`/api/business/${id}`)).data;
  await dispatch({
    type: SET_AUTH,
    auth: {
      ...business,
      token,
      type: "business"
    }
  });
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
  const collections = (
    await axios.get(`api/business/${businessId}/collections/`)
  ).data;

  dispatch({
    type: SET_COLLECTIONS,
    collections
  });
};

const fetchSelected = collections => async dispatch => {
  dispatch({
    type: SET_SELECTED,
    selected: collections.map(collection => collection.creatorId)
  });
};

const toggleSelected = selected => async dispatch => {
  dispatch({
    type: TOGGLE_SELECTED,
    selected
  });
};

const handleAddCollection = (businessId, creatorId) => async dispatch => {
  const newCollection = (
    await axios.post(`api/business/${businessId}/collections`, { creatorId })
  ).data;
  dispatch({ type: ADD_COLLECTION, collection: newCollection });
};

const handleDeleteCollection = collectionId => async dispatch => {
  await axios.delete(`api/business/${collectionId}`);
  dispatch({
    type: DELETE_COLLECTION,
    collection: { id: collectionId }
  });
};

const fetchKeywords = () => async dispatch => {
  const keywords = (await axios.get("/api/keywords")).data;
  dispatch({
    type: SET_KEYWORDS,
    keywords
  });
};

const saveCreatorInterests = (creatorId, interests) => async dispatch => {
  const creatorInterests = (
    await axios.post(`/api/creators/${creatorId}/interests`, { interests })
  ).data;
  dispatch({
    type: ADD_TO_AUTH,
    creatorInterests
  });
};

const saveCreatorLinks = (creatorId, links) => async dispatch => {
  const { youtube, twitter, website } = links;
  if (!youtube && !twitter && !website) {
    dispatch({
      type: ADD_TO_AUTH,
      creatorLinks: []
    });
    return;
  }

  const creatorLinks = (
    await axios.post(`/api/creators/${creatorId}/links`, { links })
  ).data;
  dispatch({
    type: ADD_TO_AUTH,
    creatorLinks: [creatorLinks]
  });
};

export {
  attemptFBLogin,
  getBusinessLogin,
  logout,
  fetchCreators,
  createCreatorInsight,
  fetchCollections,
  handleDeleteCollection,
  fetchKeywords,
  saveCreatorInterests,
  saveCreatorLinks,
  handleAddCollection,
  fetchSelected,
  toggleSelected
};
