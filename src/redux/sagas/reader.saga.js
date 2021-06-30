import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';


// Saga Worker to start on "ADD_READER"
function* addReader(action) {
  console.log('Info coming from client', action.payload);

  try{
    yield axios.post('/api/reader', action.payload);
    // reset state to update from dom
    yield put({type: "FETCH_READER"});
  }

  catch (error) {
    console.log('User POST request failed', error);
  }
}

// GET Readers from DB
export function* fetchReaders() {
    try {
        console.log('');
      //take every fetch items, call a fetch items function. 
      const response = yield axios.get('/api/reader')
  
      yield put({type: 'SET_READERS', payload: response.data});
      }
  
     catch (error) {
      console.log('User get request failed', error);
    }
}



export function* readerSaga() {
  yield takeLatest('ADD_READER', addReader);
  yield takeLatest('FETCH_READERS', fetchReaders)
}


  export default readerSaga;