import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MessageActions from '../actions/MessageActions'
import Chat from '../components/Chat'
import Div from '../components/RadiumTest'

export default class App extends Component {
  render() {
    const { messages, messageActions } = this.props;
    // return <Div>Salam</Div>
    return <Chat
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
