import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import color  from 'color'
import Paper from 'material-ui/lib/paper'
import Send from 'material-ui/lib/svg-icons/content/send'
import AccountCircle from 'material-ui/lib/svg-icons/action/account-circle'
import Colors from 'material-ui/lib/styles/colors'
import FlatButton from 'material-ui/lib/flat-button'
import Div from './RadiumTest'
import ChatForm from './ChatForm'

class Chat extends Component {
    constructor(props) {
        super(props)
        this.handleSender = this.handleSender.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSender(sender) {
        this.props.messageActions.activeSender(sender)
        console.log('clicked',sender)
    }
    render() {
        const {
            // fields: { message },
            // handleSubmit,
            // resetForm,
            // submitting,
            messageActions,
            data,
            actions,
            activeSender,
        } = this.props

        return (
            <div>
                <Paper
                    zDepth={2}
                    style={[styles.base, styles.header]}
                    className='header'
                    style={{backgroundColor: '#006699'}}
                    >
                    Chat Room
                </Paper>
                <Paper
                    zDepth={2}
                    className='container'
                    style={{backgroundColor: '#f1f1f1'}}
                    >

                    <Paper
                        className='senders'
                        zDepth={1}
                        >
                        {Object.keys(data).reduce((out, key)=> {
                            if (!out.includes(data[key].sender)) {
                                out.push(data[key].sender)
                            }
                            return out
                        }, []).map((item) => {
                            return <FlatButton label={item}
                                backgroundColor={
                                    activeSender==item?
                                    Colors.red50
                                    :Colors.lightBlue50
                                }
                                hoverColor={Colors.lightBlue100}
                                labelStyle={{
                                    textTransform: 'Capitalize',
                                    color: '#006699',
                                    margin: 10,
                                }}
                                style={{margin: 7}}
                                onClick={() => {this.handleSender(item)}}>

                            </FlatButton>
                        }
                    )}
                </Paper>

                <Paper
                    className='messages'
                    zDepth={1}
                    >
                    {Object.keys(data).map((key)=>{
                        return (
                            <div
                                 className='item'
                                >
                                <text
                                     className="message-sender"
                                    >
                                    {data[key].sender}:
                                </text>
                                <text>
                                    {data[key].message}
                                </text>
                            </div>
                        )
                    }
                )}
                <ChatForm
                    handleSubmit={this.handleSubmit}
                    activeSender={activeSender}
                    messageActions={messageActions}
                    />
            </Paper>
        </Paper>
    </div>
)}
}

Chat.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired,
}

const backColor = '#ffaacc'
const styles = {
    base: {
        backgroundColor: backColor,
        ':hover': {
            backgroundColor:color(backColor).lighten(0.1).hexString()
        }
    },
    header: {
        //   @extend .container,
        marginTop: 20,
        padding: 12,
        color: '#fff',
        fontWeight: 'bold',
        backgroundColor: '#006699',
        ':hover': {
            backgroundColor: '#ffaacc',
        }
    },

    item: {
        padding: 7,
    },
    subContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
        padding: 10,
    },

    messages: {
        // @extend .sub-container,
        width: '100%',
    },

    senders: {
        // @extend .sub-container,
        '@media (max-width: 400px)': {
            display: 'none',
        }
    },

    messageSender: {
        // @extend .item,
        color: '#007788',
        textTransform: 'capitalize',
    },

    container: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },

}

export default Radium(Chat)
