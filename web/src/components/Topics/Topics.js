import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Card, CardMedia } from 'material-ui';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import styles from './Topics.css';

const Topics = ({ loading, getTopics = [], history }) => (
  <div>
    <Header history={history} />
    <div className={styles.grid}>
      {getTopics.map((topic, index) => (
        <div key={index} className={styles.gridItem}>
          <Link to={`/topic/${topic.id}`} style={{textDecoration: 'none'}}>
            <Card>
              <CardMedia>
                <img src={topic.imageUrl} className={styles.topicImage} alt="" />
              </CardMedia>
              <div className={styles.topicContent}>
                <span className={styles.topicTitle}>{topic.title}</span>
                <span className={styles.topicDesc}>{topic.description}</span>
                <div className={styles.topicTags}>
                  {topic.tags.slice(0,4).map((tag, index) => (
                    <div key={index} className={styles.topicTag}>{tag}</div>
                  ))}
                </div>
              </div>            
            </Card>
          </Link>
        </div>
      ))}
      <Link to='/createTopic'><p>Create Topic</p></Link>
    </div>
  </div>
);

const GetTopicsQuery = gql`
  query getTopics {
    getTopics {
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
      createdAt
    }
  }
`;

export default graphql(GetTopicsQuery, {
  props({ data: { loading, getTopics } }) {
    return {
      loading, 
      getTopics
    };
  }
})(Topics);
