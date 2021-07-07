import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Button from "@material-ui/core/Button";
import AsyncStorage from '@react-native-community/async-storage';

function SearchItem( { book }) {

    const dispatch = useDispatch();
    const [selectedReaderId, setReaderId] = useState();

    const load = async () => {
        try {
            let jsonValue = await AsyncStorage.getItem('SelectedReader')

            let parsed = JSON.parse(jsonValue);

            setReaderId(parsed.id)

        } catch (err) {
            console.log('async', err);
        }
    }

    console.log(load());

    useEffect(() => {
        load()
      }, [])


    const title = book.volumeInfo.title;
    const author = book.volumeInfo.authors
    const bookUrl = book.volumeInfo.imageLinks.thumbnail;
    const readerId = selectedReaderId

    console.log('reader id', readerId)

    const selectedBook = {
        title: title,
        bookImg: bookUrl,
        author: author,
        id: readerId
    }
    
    const handleClick = () => {
        dispatch({type: 'ADD_BOOK', payload: selectedBook})
        alert('Book Added to Reader');
    }

return (
  
      <div>
        <p> Title: {title}</p>
        <p> {book.volumeInfo.subtitle}</p>
        <p> Author: {author}</p>
        <img src={bookUrl} alt="searched Book results" width="300px"></img>

        <Button variant="contained" onClick={handleClick}>Add to List</Button>
      </div>

  );

    
}

export default SearchItem;