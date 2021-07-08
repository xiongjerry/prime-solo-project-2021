import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

function BookList ({ readerId }) {

    const dispatch = useDispatch();
    const bookList = useSelector((store) => store.bookList);

    console.log('readerId', readerId)
    
    if(readerId !== null) {
        console.log('book list', bookList)
    }
    
    useEffect(() => {
        dispatch({
            type: 'FETCH_BOOKS',
            payload: readerId
        })
    }, [readerId])

    function handleDelete (id) {
        console.log('book id to delete', id)
        dispatch({
            type: 'DELETE_BOOK',
            payload: {
                bookId: id,
                readerId: readerId
            }
        })
    }

    return (
        <div className="container">
            <p>BOOKS TO READ</p>
            <ul>
                {bookList.map(book => {
                    return (
                        <li key={book.id}>
                            <h3>{book.book_title}</h3>
                            <h3>By: {book.author}</h3>
                            <img src={book.book_img} alt="searched Book results" width="300px"></img>

                            <Button onClick={() => handleDelete(book.id)} variant="outlined">Delete Book</Button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default BookList