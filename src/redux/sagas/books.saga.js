import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';


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

export function* booksSaga() {
    yield takeLatest('FETCH_RESULTS', fetchResults);
}


export default booksSaga;