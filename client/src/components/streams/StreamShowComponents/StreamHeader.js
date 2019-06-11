import React from 'react';
import StreamFollow from './StreamFollow'

export default class StreamHeader extends React.Component {

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render() {
    return (
      <div>
        <StreamFollow />
      </div>
    );
  }
}