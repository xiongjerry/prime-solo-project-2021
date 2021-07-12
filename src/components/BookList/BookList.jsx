import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import './BookList.css'

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
        maxWidth: 450,
    },
    media: {
        height: 350,
    },
});

//material-ui

function BookList({ readerId, goal }) {

    const classes = useStyles();

    const dispatch = useDispatch();
    const bookList = useSelector((store) => store.bookList);

    //value for books read
    const [booksRead, setBooksRead] = useState(0);

    console.log('readerId', readerId)

    if (readerId !== null) {
        console.log('book list', bookList)
    }

    useEffect(() => {
        dispatch({
            type: 'FETCH_BOOKS',
            payload: readerId
        })
    }, [readerId])

    function handleDelete(id) {
        console.log('book id to delete', id)

        let confirmAction = confirm("Are you sure you want to delete this book?");
        if (confirmAction) {
            alert("Book Deleted");

            dispatch({
                type: 'DELETE_BOOK',
                payload: {
                    bookId: id,
                    readerId: readerId
                }
            })
        } else {
            alert("Delete canceled");

        } // end if statement
    } // end handleDelete

    function handleUpdate(id) {
        console.log('clicked on handleUpdate')

        dispatch({
            type: 'UPDATE_BOOK',
            payload: {
                bookId: id,
                readerId: readerId
            }
        })
        // update progress bar on click
        setBooksRead(booksRead + 1)
        console.log('books read after update', booksRead)
    }

    return (
        <div className="container">

            <div>
                <h2>ROAD-GOAL</h2>

                <ProgressBar value={booksRead} max={goal} />
            </div>

            <h2>BOOKS TO READ</h2>
            <ul>
                {bookList.map(book => {
                    return (
                        <li key={book.id} className="booklist">

                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={book.book_img}
                                        title="Selected book"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h3">
                                            {book.book_title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            By: {book.author}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    {book.completed &&
                                        <h4>Finished Reading!</h4>
                                    }

                                    <Button
                                        onClick={() => handleUpdate(book.id)}
                                        variant="outlined"
                                        color="primary"
                                    >Finished Book!
                                    </Button>

                                </CardActions>
                            </Card>

                            <Button
                                onClick={() => handleDelete(book.id)}
                                variant="contained" color="secondary"
                                color="secondary"
                            >Delete Book
                            </Button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default BookList