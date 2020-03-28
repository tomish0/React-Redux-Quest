const initialState = {
  light: "on",
  count: 0
};

const Reducer = (state = initialState, action) => {  
  switch (action.type) {
    case "SWITCH": 
    return {
      ...state,
      light: state.light === "on" ? "off" : "on"
    };
    case "ADD":
      return {
        ...state,
        count: state.count + 1
      };
    case "MINUS":
      return {
        ...state,
        count: state.count - 1
      };
    case "ADD10":
      return {
        ...state,
        count: state.count + 10
      };
    case "MINUS10":
      return {
        ...state,
        count: state.count - 10
      };
    case "RESET":
      return {
        ...state,
        count: state.count = 0
      };
    default:
      return state;
  }
};

export default Reducer;
