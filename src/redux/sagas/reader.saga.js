import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';


// Saga Worker to start on "ADD_READER"
function* addReader(action) {
  console.log('Info coming from client', action.payload);

  try{
    yield axios.post('/api/reader', action.payload);
    // reset state to update from dom
    // yield put({type: "FETCH_READER"});
  }

  catch (error) {
    console.log('User POST request failed', error);
  }
}


export function* readerSaga() {
  yield takeLatest('ADD_READER', addReader);
}


  export default readerSaga;