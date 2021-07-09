import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import AsyncStorage from '@react-native-community/async-storage';
import './UserPage.css'

function UserPage() {

  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const readerList = useSelector((store) => store.readerList)
  
  console.log(`User's reader list`, readerList)
  
  useEffect(() => {
    dispatch({ type: 'FETCH_READERS', payload: user.id });
  }, [readerList])

  // goes to reader track page on click
  const handleReaderTrack = async (reader) => {
    console.log('Clicked on Read-Star:', reader.reader_name, reader);

    // save selected reader info into async storage
      try {
          await AsyncStorage.setItem("SelectedReader", JSON.stringify(reader));
      } catch (err) {
          console.log(err);
      }
  
      history.push('/readerTrack');
    };


  return (
    <div className="container">
      <h1>Welcome To Read-Star, Captain {user.username}!</h1>

      <h2>Here Are Your Read-Stars!</h2>

      <ul>
        {readerList.map (reader => {
          return (
            <li key={reader.id} onClick={ () => {handleReaderTrack(reader)} } className="list">
              <h3>Reader: {reader.reader_name}</h3>
              <p>Total Books to Read: {reader.goal}</p>
              <p>Grand Prize: {reader.reward}</p>
            </li>
          )
        })}
      </ul>

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
