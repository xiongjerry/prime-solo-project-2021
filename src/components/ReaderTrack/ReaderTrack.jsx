import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import EditReaderForm from '../EditReaderForm/EditReaderForm';

function ReaderTrack() {

    // edit button functionality
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const toggleEditForm = () => {
        setIsPopupOpen(!isPopupOpen);
    }

    const selectedReader = useSelector((store) => store.selectedReader)
    console.log('reader info', selectedReader)

    return (
        <div className="container">
            <h2>{selectedReader[0]?.reader_name}'s Track</h2>

            <h3>Goal: {selectedReader[0]?.goal}</h3>
            <h3>Reward: {selectedReader[0]?.reward}</h3>

            <main>
                <input
                    type="button"
                    value="Click to Open Popup"
                    onClick={toggleEditForm}
                />
                {isPopupOpen && <EditReaderForm
                    content={<>
                        <b>Edit Reader Stats</b>
                        <p>Test</p>
                        <Button>Submit Changes</Button>
                    </>}
                    handleClose={toggleEditForm}
                />}
            </main>

        </div>
    )
}

export default ReaderTrack;