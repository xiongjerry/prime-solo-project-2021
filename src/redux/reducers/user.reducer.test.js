import userReducer from "./user.reducer";

// test SET_USER
// test UNSET_USERE
// test other action
// test initial value

describe('USER REDUCER TESTS', () => {
    
    test('SET_USER', () => {
        const action = {
            type: 'SET_USER',
            payload: {
                id: 1
            }
        }
        const state = {};
        expect(userReducer(state, action)).toEqual({id : 1});
    })

    test('UNSET_USER', () => {
        const action = {
            type: 'UNSET_USER'
        }
        const state = {};
        expect(userReducer(state, action)).toEqual({});
    })

})