import readerList from "./reader.reducer";

// testing for "SET_READERS"

describe('Reader List Reducer Test', () => {

    it('should return reader object list at user id', () => {
        const action = {
            type: 'SET_READERS',
            payload: {
                id: 1,
                reader_name: "Bobby",
                goal: 5,
                reward: "Toy Car",
                parent_id: 1
            }
        }
        const state = {};
        expect(readerList(state, action)).toEqual({
            id: 1,
            reader_name: "Bobby",
            goal: 5,
            reward: "Toy Car",
            parent_id: 1
        });
    })

})