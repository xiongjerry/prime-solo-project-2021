import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AddReader() {

  const dispatch = useDispatch();
  // Fetching id for User to input into dispatch
  const user = useSelector((store) => store.user);

  const [name, setName] = useState('');
  const [goal, setGoal] = useState(0);
  const [reward, setReward] = useState('');

  const handleChangeName = (event) => {
      setName(event.target.value)
  }
  
  const handleChangeGoal = (event) => {
    setGoal(event.target.value)
  }

  const handleChangeReward = (event) => {
    setReward(event.target.value)
  }


  const handleSubmit = event => {
      event.preventDefault()

      const newReader = {
        name: name,
        goal: goal,
        reward: reward,
        user: user.id
      }
      console.log('new Reader', newReader);

      dispatch({
          type: 'ADD_READER',
          payload: newReader
      })
      //reset inputs after submission
      setName('');
      setGoal(1);
      setReward('');
    }

  return (
    <div className="container">
      <p>Add Reader</p>
      
      <form onSubmit={handleSubmit}>
        
        <TextField 
        id="outlined-basic"
        label="New Racer's Name"
        variant="outlined"
        value={name}
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
        label="Choose a Prize"
        variant="outlined"
        value={reward}
        onChange={handleChangeReward}
        required
        />

        <Button type="submit" variant="outlined">Add Read-Star!</Button>
        </form>

    </div>
  );
}

export default AddReader;
