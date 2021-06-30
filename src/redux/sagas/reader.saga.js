import { useRadioGroup } from '@material-ui/core';
import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';


// Saga Worker to add reader info into DB
function* addReader(action) {
    console.log('Info coming from client', action.payload);

    try {
        yield axios.post('/api/reader', action.payload);
        // reset state to update from dom
        yield put({ type: "FETCH_READER" });
    }

    catch (error) {
        console.log('User POST request failed', error);
    }
}

// GET Readers from DB
export function* fetchReaders(action) {

    console.log('user id:', action.payload);
    const userId = action.payload

    try {
        const response = yield axios.get('/api/reader',
         {params:{
            userId: userId
         }
        })
        //take readers input and insert into readerList reducer
        yield put({ type: 'SET_READERS', payload: response.data });
    }

    catch (error) {
        console.log('User get request failed', error);
    }
}



export function* readerSaga() {
    yield takeLatest('ADD_READER', addReader);
    yield takeLatest('FETCH_READERS', fetchReaders);
}


export default readerSaga;