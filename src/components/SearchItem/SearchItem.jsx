import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

//matarial-ui

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
        maxWidth: 350,
    },
    media: {
        height: 350,
    },
});

//material-ui

function SearchItem({ book }) {

    const classes = useStyles();

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
        dispatch({ type: 'ADD_BOOK', payload: selectedBook })
        alert('Book Added to Reader');
    }

    return (

        <div className="container">

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={bookUrl}
                        title="Selected book"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h3">
                        Title: {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {book.volumeInfo.subtitle}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Author: {author}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                
                <Button variant="contained" color="secondary" onClick={handleClick}>Add to List</Button>   

                </CardActions>
            </Card>

            {/* <p> Title: {title}</p>
            <p> {book.volumeInfo.subtitle}</p>
            <p> Author: {author}</p> */}
            {/* <img src={bookUrl} alt="searched Book results" width="300px"></img> */}

            {/* <Button variant="contained" onClick={handleClick}>Add to List</Button> */}
        </div>

    );


}

export default SearchItem;