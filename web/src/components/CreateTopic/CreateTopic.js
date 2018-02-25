import React from 'react';

import CreateTopicForm from './CreateTopicForm';
import Header from '../Header/Header';

class CreateTopic extends React.Component {
  render() {
    return (
      <div>
        <Header history={this.props.history} />
        <CreateTopicForm onSubmit={this.submit} />
      </div>
    );
  }

  submit = (values) => {
    console.log(values);
  }
};

export default CreateTopic;
