import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';


function ReaderTrack () {

    const selectedReader = useSelector((store) => store.selectedReader)
    console.log('reader info', selectedReader)

    return (
        <div className="container">
        <h2>{selectedReader[0]?.reader_name}'s Track</h2>

        <h3>Goal: {selectedReader[0]?.goal}</h3>
        <h3>Reward: {selectedReader[0]?.reward}</h3>
  
      </div>
    )
}

export default ReaderTrack;