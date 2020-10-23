const initialState = {
  position: [1020, 320],
  spriteLocation: "6px 7px",
  walkIndex: 0,
};

const goblinReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVE_GOBLIN":
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default goblinReducer;
