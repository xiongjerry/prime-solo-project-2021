import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import EditReaderForm from '../EditReaderForm/EditReaderForm';

function ReaderTrack() {

    const history = useHistory();
    const dispatch = useDispatch();

    const selectedReader = useSelector((store) => store.selectedReader)
    console.log('reader info', selectedReader)

    // edit button functionality
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const toggleEditForm = () => {
        setIsPopupOpen(!isPopupOpen);
    }

    // input useStates
    const [newName, setNewName] = useState('');
    const [newGoal, setNewGoal] = useState(0);
    const [newReward, setNewReward] = useState('');

    const handleChangeName = (event) => {
        setNewName(event.target.value)
    }
    const handleChangeGoal = (event) => {
      setNewGoal(event.target.value)
    }
    const handleChangeReward = (event) => {
      setNewReward(event.target.value)
    }

    // dispatch to PUT route
    const handleEditSubmit = event => {
        event.preventDefault()
  
        const newReaderInfo = {
          name: newName,
          goal: newGoal,
          reward: newReward,
          reader_id: selectedReader[0]?.id,
          parent_id: selectedReader[0]?.parent_id
        }
        console.log('new Reader', newReaderInfo);
  
        dispatch({
            type: 'EDIT_READER',
            payload: newReaderInfo
        })
        //reset inputs after submission
        history.push('/user')
      }

    return (
        <div className="container">
            <h2>{selectedReader[0]?.reader_name}'s Track</h2>

            <h3>Goal: {selectedReader[0]?.goal}</h3>
            <h3>Reward: {selectedReader[0]?.reward}</h3>

            <main>
                <input
                    type="button"
                    value="EDIT READER INFO"
                    onClick={toggleEditForm}
                />
                {isPopupOpen && <EditReaderForm
                    content={<>
                        <b>Edit Reader Stats</b>

                        <form onSubmit={handleEditSubmit}>

                            <TextField
                                id="outlined-basic"
                                label="Insert New Name"
                                variant="outlined"
                                value={newName}
                                onChange={handleChangeName}
                                required
                            />

                            <TextField
                                id="filled-number"
                                label="Goal (Books To Read)"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="filled"
                                onChange={handleChangeGoal}
                                required
                            />

                            <TextField
                                id="outlined-basic"
                                label="Edit Prize"
                                variant="outlined"
                                value={newReward}
                                onChange={handleChangeReward}
                                required
                            />

                            <Button type="submit" variant="outlined">Submit Changes</Button>
                        </form>

                    </>}
                    handleClose={toggleEditForm}
                />}
            </main>

        </div>
    )
}

export default ReaderTrack;