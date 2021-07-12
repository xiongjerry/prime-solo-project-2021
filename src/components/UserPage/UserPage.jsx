import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import AsyncStorage from '@react-native-community/async-storage';
import './UserPage.css'

//material-ui

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

//material-ui


function UserPage() {

  const classes = useStyles();

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
            
            <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Reader: {reader.reader_name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                Total Books to Read: {reader.goal}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Grand Prize: {reader.reward}
                </Typography>
              </CardContent>
            </CardActionArea>
            </Card>
            </li>
          )
        })}
      </ul>

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
