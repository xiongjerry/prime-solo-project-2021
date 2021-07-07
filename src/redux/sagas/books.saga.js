import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

// Google Books API GET request
function* fetchResults(action) {
    console.log('search query is:',action.payload)
    try {
      const response = yield axios.get("/api/googleBooks", {
        params: {
          search: action.payload,
        },
      });
      yield console.log("fetching search results", response);
      // input results into reducer to display
      yield put({type: "SET_RESULTS",payload: response.data,});
    } catch (error) {
      console.error("error with Book Results GET request", error);
    }
}

// Add Book info into DB via POST
function* addBook (action) {
    console.log('Book Info sent', action.payload);

    try {
        yield axios.post('/api/booklist', action.payload);

    }

    catch (error) {
        console.log('User POST request failed', error);
    }
}

// GET request from books DB
export function* fetchBooks(action) {

    console.log('reader id:', action.payload);
    const readerId = action.payload

    try {
        const response = yield axios.get('/api/booklist'
        ,{params:{
            userId: userId
         }
        })
       
        //take readers input and insert into readerList reducer
        yield put({ type: 'SET_BOOKS', payload: response.data });
    }

    catch (error) {
        console.log('User get request failed', error);
    }
}

export function* booksSaga() {
    yield takeLatest('FETCH_RESULTS', fetchResults);
    yield takeLatest('ADD_BOOK', addBook)
    yield takeLatest('FETCH_BOOKS', fetchBooks)
}


export default booksSaga;