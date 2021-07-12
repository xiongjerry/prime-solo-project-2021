import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import AsyncStorage from '@react-native-community/async-storage';

import EditReaderForm from '../EditReaderForm/EditReaderForm';
import BookList from '../BookList/BookList';

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
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

//material-ui

function ReaderTrack() {

    const classes = useStyles();

    const history = useHistory();
    const dispatch = useDispatch();

    const [name, setName] = useState();
    const [goal, setGoal] = useState();
    const [reward, setReward] = useState();
    const [readerId, setReaderId] = useState();
    const [userId, setUserId] = useState();

    const reader = {
        name: name,
        goal: goal,
        reward: reward,
        readerId: readerId
    }

    // const selectedReader = useSelector((store) => store.selectedReader)
    console.log('reader info', reader)


    const load = async () => {
        try {
            let jsonValue = await AsyncStorage.getItem('SelectedReader')

            let parsed = JSON.parse(jsonValue);

            setName(parsed.reader_name);
            setGoal(parsed.goal);
            setReward(parsed.reward);
            setReaderId(parsed.id)
            setUserId(parsed.parent_id)

        } catch (err) {
            console.log('async', err);
        }
    }

    console.log(load());

    useEffect(() => {
        load()
    }, [])


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
            reader_id: readerId,
            parent_id: userId
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

            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}'s Track
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            Goal: {goal}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Reward: {reward}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            {/* <h1>{name}'s Track</h1>

            <h2>Goal: {goal}</h2>
            <h2>Reward: {reward}</h2> */}


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
                                color="primary"
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
                                color="primary"
                            />

                            <TextField
                                id="outlined-basic"
                                label="Edit Prize"
                                variant="outlined"
                                value={newReward}
                                onChange={handleChangeReward}
                                color="primary"
                            />

                            <Button type="submit" variant="outlined" color="secondary">Submit Changes</Button>
                        </form>

                    </>}
                    handleClose={toggleEditForm}
                />}

            </main>

            <div>
                <BookList readerId={readerId} goal={goal} />

                <Button onClick={() => { history.push('/bookSearch') }} variant="contained" color="primary">Look For a Book!</Button>
            </div>
        </div>
    )
}

export default ReaderTrack;