import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import ProgressBar from '../ProgressBar/ProgressBar';
import './BookList.css'

function BookList({ readerId, goal }) {

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
                            <h3>{book.book_title}</h3>
                            <h4>By: {book.author}</h4>
                            <img src={book.book_img} alt="searched Book results" width="300px" className="img"></img>
                            {book.completed &&
                            <h4>Finished Reading!</h4>
                            }

                            <Button 
                            onClick={() => handleUpdate(book.id)} 
                            variant="outlined"
                            color="primary"
                            >Completed Book!
                            </Button>

                            <Button 
                            onClick={() => handleDelete(book.id)}
                            variant="outlined"
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