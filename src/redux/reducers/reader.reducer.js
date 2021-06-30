const readerList = (state = [], action) => {
    switch (action.type) {
      case 'SET_READERS':
        return action.payload;
        
      default:
        return state;
    }
  };
  
 
  export default readerList;