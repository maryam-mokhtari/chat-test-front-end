import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MessageActions from '../actions/MessageActions'
import ChatForm from '../components/ChatForm'

export default class App extends Component {
  render() {
    const { messages, messageActions } = this.props;

    return <ChatForm
      data={messages.data}
      activeSender={messages.activeSender}
      messageActions={messageActions} />
  }
}

App.propTypes = {
  messageActions: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    messageActions: bindActionCreators(MessageActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
