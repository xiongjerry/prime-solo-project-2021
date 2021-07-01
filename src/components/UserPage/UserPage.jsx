import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function UserPage() {

  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const readerList = useSelector((store) => store.readerList)
  console.log(`User's reader list`, readerList)
  
  useEffect(() => {
    dispatch({ type: 'FETCH_READERS', payload: user.id });
  }, [])

  // goes to reader track page on click
  const handleReaderTrack = (reader) => {
    console.log('Clicked on Read-Star:', reader.reader_name, reader);
    // send selected reader info through into reducer
    dispatch({type: 'FETCH_SELECTED_READER', payload: reader});
    history.push('/readerTrack');
    };


  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p> */}
      <h3>Your Read-Stars!</h3>

      <ul>
        {readerList.map (reader => {
          return (
            <li key={reader.id} onClick={ () => {handleReaderTrack(reader)} }>
              <p>Reader: {reader.reader_name}</p>
              <p>Books Left to Read! {reader.goal}</p>
              <p>Prize: {reader.reward}</p>
            </li>
          )
        })}
      </ul>

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
