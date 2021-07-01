const selectedReader = (state = [], action) => {
    switch (action.type) {
      case 'SET_SELECTED_READER':
        return action.payload;
        
      default:
        return state;
    }
  };
  
 
  export default selectedReader;