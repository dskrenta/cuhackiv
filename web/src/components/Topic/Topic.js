import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import TimeAgo from 'react-timeago';

import TopicEditor from './TopicEditor';
import Header from '../Header/Header';
import styles from './Topic.css';

const Topic = ({ loading, topic, match, history }) => (
  <div>
    <Header history={history} />
    {loading ? <h1>Loading...</h1> : <RenderTopic topic={topic} />}
  </div>
);

const RenderTopic = ({ topic }) => (
  <div className={styles.contain}>
    <div className={styles.headerContain}>
      <img src={topic.imageUrl} className={styles.image} alt="" />
      <div className={styles.headerContent}>
        <span className={styles.title}>{topic.title}</span>
        <span className={styles.desc}>{topic.description}</span>
        <div className={styles.topicTags}>
          {topic.tags.slice(0,4).map((tag, index) => (
            <div key={index} className={styles.topicTag}>{tag}</div>
          ))}
        </div>
        <ListItem 
          disabled={true}
          leftAvatar={<Avatar src={topic.user.imageUrl} style={{left: 0, top: 10}} />}
          primaryText={topic.user.name}
          secondaryText={<span>Created <TimeAgo date={topic.createdAt} /></span>}
          style={{paddingLeft: 50, paddingTop: 14}}
        />
      </div>
    </div>
    <TopicEditor topicId={topic.id} content={topic.content} />
  </div>
);

const GetTopicQuery = gql`
  query getTopic($topicId: ID!) {
    getTopic(topicId: $topicId) {
      id
      user {
        id 
        email 
        name
        imageUrl
      }
      title
      description
      imageUrl
      tags
      content
      createdAt
    }
  }
`;

export default graphql(GetTopicQuery, {
  options({ match }) {
    return {
      variables: {
        topicId: match.params.id
      },
      fetchPolicy: 'network-only'
    };
  },
  props({ data: { loading, getTopic } }) {
    return {
      loading, 
      topic: getTopic
    };
  }
})(Topic);