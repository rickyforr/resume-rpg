import { combineReducers, createStore } from "redux";
import playerReducer from "../features/player/player.reducer";
import mapReducer from "../features/map/map.reducer";
import goblinReducer from "../features/goblin/goblin.reducer";

const rootReducer = combineReducers({
  player: playerReducer,
  goblin: goblinReducer,
  map: mapReducer,
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
