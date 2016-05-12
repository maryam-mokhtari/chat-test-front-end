import React, { Component, PropTypes } from 'react'
import { reduxForm, reset } from 'redux-form'
import TextField from 'material-ui/lib/text-field'
import IconButton from 'material-ui/lib/icon-button'

export const fields = [ 'message']

class ChatForm extends React.Component {
    handleSubmit(sender, message) {
        this.props.messageActions.addMessage(sender, message)
    }
    render() {
        const {
            fields: { message },
            handleSubmit,
            resetForm,
            submitting,
            // data,
            // actions,
            activeSender,
        } = this.props

    return (
        <form onSubmit={
                this.props.handleSubmit(() => {
                    this.handleSubmit(activeSender, message.value)
                    this.props.dispatch(reset('simple'))
                })
            }>

            <TextField
                hintText="Message"
                fullWidth="true"
                floatingLabelText="Type message..."
                {...message}
                />
            <IconButton  type="submit">
            </IconButton>
        </form>
    )
}
}

export default reduxForm({
    form: 'simple',
    fields
})(ChatForm)
