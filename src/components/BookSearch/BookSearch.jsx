import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import SearchItem from '../SearchItem/SearchItem'

function BookSearch() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [searchQuery, setSearchQuery] = useState('')
    const searchResults = useSelector((store) => store.searchResults.items)

    const handleChange = (event) => {
        setSearchQuery(event.target.value)
    }

    useEffect(() => {
    }, [])

    const handleSubmit = event => {
        event.preventDefault()
        dispatch({
            type: 'FETCH_RESULTS',
            payload: searchQuery
        })
        setSearchQuery('')
    }

    return (
        <div className="container">
            <h1>Book Search</h1>


            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={searchQuery} lable="Search for books" />
                <Button type="submit" variant="outlined">Submit Search</Button>
            </form>
            <main >
                <h3>SEARCH RESULTS</h3>
                <ul>
                    {searchResults?.map((book, index) => (
                        <SearchItem key={index} book={book} />
                    ))}
                </ul>
            </main>
        </div>
    )
}

export default BookSearch;