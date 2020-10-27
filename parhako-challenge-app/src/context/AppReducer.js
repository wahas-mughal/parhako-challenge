export default (state, action) => {
  switch(action.type){
    case "GET_PHOTOS":
      return {
        ...state,
        Photos: action.payload
      }
      case "ERRORS":
        return{
          ...state,
          Errors: action.payload
        }
   
  }

  return state;
};
