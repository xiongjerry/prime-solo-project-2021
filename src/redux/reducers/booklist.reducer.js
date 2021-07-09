const bookList = (state = [], action) => {
    if(action.type === 'SET_BOOKS') {
        return action.payload;
    }
    return state;
}

export default bookList;