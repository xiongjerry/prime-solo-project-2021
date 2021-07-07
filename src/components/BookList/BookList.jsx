import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react';


function BookList ({ selectedReader }) {

    const dispatch = useDispatch();
    const bookList = useSelector((store) => store.bookList);

    console.log('readerId', selectedReader.readerId)
    console.log('book list', bookList)

    useEffect(() => {
        dispatch({
            type: 'FETCH_BOOKS',
            payload: selectedReader.readerId
        })
    }, [])

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
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default BookList