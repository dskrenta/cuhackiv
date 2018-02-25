import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

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

  submit = async (values) => {
    try {
      await this.props.mutate({
        variables: {
          topic: values
        }
      });
      this.props.history.push('/topics');
    } catch (error) {
      console.error(error);
    }
  }
};

const CreateTopicMutation = gql`
  mutation createTopic($topic: TopicInput!) {
    createTopic(topic: $topic) {
      id
    }
  }
`;

export default graphql(CreateTopicMutation)(CreateTopic);