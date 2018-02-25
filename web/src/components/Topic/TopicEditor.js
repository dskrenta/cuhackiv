import React from 'react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Debounce } from 'react-throttle';

import Editor from '../Editor/Editor';

class TopicEditor extends React.Component {
  render() {
    const { content } = this.props; 
    return (
      <Debounce time="5000" handler="onChange">
        <Editor onChange={this.save} value={atob(content)} />
      </Debounce>
    );
  }

  save = async (value) => {
    try {
      await this.props.mutate({
        variables: {
          topicId: this.props.topicId,
          newContent: btoa(value)
        }
      });
    }
    catch (error) {
      console.error(error);
    }
  }
}

const EditTopicContentMutation = gql`
  mutation editTopicContent($topicId: ID!, $newContent: String!) {
    editTopicContent(topicId: $topicId, newContent: $newContent) {
      id
    }
  }
`;

export default graphql(EditTopicContentMutation)(TopicEditor);