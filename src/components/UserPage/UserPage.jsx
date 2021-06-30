import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

function UserPage() {

  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);
  const readerList = useSelector((store) => store.readerList)
  console.log(`User's reader list`, readerList)
  
  useEffect(() => {
    dispatch({ type: 'FETCH_READERS', payload: user.id });
  }, [])


  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p> */}
      <h3>Your Read-Stars!</h3>

      <ul>
        {readerList.map (reader => {
          return (
            <li key={reader.id}>
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
