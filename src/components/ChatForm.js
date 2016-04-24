import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/lib/paper'
import TextField from 'material-ui/lib/text-field'
import IconButton from 'material-ui/lib/icon-button'
import Send from 'material-ui/lib/svg-icons/content/send'
import AccountCircle from 'material-ui/lib/svg-icons/action/account-circle'
import Colors from 'material-ui/lib/styles/colors'
import FlatButton from 'material-ui/lib/flat-button'
import { reduxForm, reset } from 'redux-form'


export const fields = [ 'message']

class ChatForm extends Component {
  constructor(props) {
    super(props)
    this.handleSender = this.handleSender.bind(this)
  }

  handleSubmit(sender, message) {
    this.props.messageActions.addMessage(sender, message)
  }
  handleSender(sender) {
    this.props.messageActions.activeSender(sender)
    console.log('clicked',sender);
  }
  render() {
    const {
      fields: { message },
      handleSubmit,
      resetForm,
      submitting,
      data,
      actions,
      activeSender,
    } = this.props

    return (
      <div>
        <Paper zDepth={2} className='header' style={{backgroundColor: '#006699'}}>
          Chat Room
        </Paper>
        <Paper zDepth={2}  className='container' style={{backgroundColor: '#f1f1f1'}}>

          <Paper className='senders' zDepth={1}>
            {Object.keys(data).reduce((out, key)=> {
              if (!out.includes(data[key].sender)) {
                out.push(data[key].sender)
              }
              return out
            }, []).map((item) => {
              return <FlatButton label={item}
                backgroundColor={activeSender==item? Colors.red50:Colors.lightBlue50}
                hoverColor={Colors.lightBlue100}
                labelStyle={{textTransform: 'Capitalize', color: '#006699', margin: 10,}}
                style={{margin: 7}}
                onClick={() => {this.handleSender(item)}}></FlatButton>
            }
          )}
        </Paper>

        <Paper className='messages' zDepth={1}>
          {Object.keys(data).map((key)=>{
            return (
              <div className='item'>
                <text className="message-sender">{data[key].sender}: </text>
                <text>{data[key].message}</text>
              </div>
            )
          }
        )}
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
    </Paper>
  </Paper>
</div>
)}
}

ChatForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
}

export default reduxForm({
  form: 'simple',
  fields
})(ChatForm)
