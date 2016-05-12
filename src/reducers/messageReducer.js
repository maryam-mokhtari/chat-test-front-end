import { ADD_MESSAGE, ACTIVE_SENDER } from '../constants/ActionTypes'
const initialState = {
    data: {
        1:{
            sender: 'maryam',
            message: 'hi'
        },
        2:{
            sender: 'yasser',
            message: 'hey'
        },
        3:{
            sender: 'yasser',
            message: 'helo'
        },
        4:{
            sender: 'maryam',
            message: 'Hello'
        },
        5:{
            sender: 'payam',
            message: 'hi'
        }
    },
    activeSender: 'maryam',
}
let newState = {}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
        let id = Object.keys(state.data).length + 1
        newState = Object.assign({}, state, { data:
            Object.assign({}, state.data, {
                [id]:
                {
                    sender: action.payload.sender,
                    message: action.payload.message
                }
            })
        })
        return newState
        case ACTIVE_SENDER:
        newState = Object.assign({}, state, {activeSender: action.payload})
        return newState
        default:
        return state
    }
}

export default messageReducer
