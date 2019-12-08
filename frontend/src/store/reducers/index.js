import { combineReducers } from "redux";

import authReducer from "./auth";
import creatorReducer from "./creators";
import collectionReducer from "./collections";
import keywordReducer from "./keywords";
import selectedReducer from "./selected";

const reducer = combineReducers({
  auth: authReducer,
  creators: creatorReducer,
  collections: collectionReducer,
  keywords: keywordReducer,
  selected: selectedReducer
});

export default reducer;
