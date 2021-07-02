import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function BookSearch() {

    const [searchQuery, setSearchQuery] = useState('')

    const handleChange = (event) => {
        setSearchQuery(event.target.value)
    }


    return (
        <div className="container">
            <h1>Book Search</h1>


            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={searchQuery} lable="Search for books" />
                <Button type="submit" variant="outlined">Submit Search</Button>
            </form>
        </div>
    )
}

export default BookSearch;