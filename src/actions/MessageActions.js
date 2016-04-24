import { ADD_MESSAGE, ACTIVE_SENDER } from '../constants/ActionTypes.js'

export function addMessage(sender, message) {
  return {
    type: ADD_MESSAGE,
    payload: { sender, message }
  }
}

export function activeSender(sender) {
  return {
    type: ACTIVE_SENDER,
    payload: sender
  }
}
