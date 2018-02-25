import React from 'react';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import Header from '../Header/Header';

import styles from './Topic.css';

const sampleTopic = {
  user: {
    email: 'johndoes@email.com',
    name: 'Johnathan Doeth',
    imageUrl: 'http://cdn.edgecast.steamstatic.com/steamcommunity/public/images/avatars/d2/d201163509c6d3d57965cd41a125848b9b7dffe6_full.jpg',
  },
  title: 'Gun Control',
  image: 'https://d18lkz4dllo6v2.cloudfront.net/cumulus_uploads/entry/2018-02-21/Gun%20control.jpg?w=660',
  description: 'Regulate the manufacture, sale, transfer, possession, modification, or use of firearms by civilians.',
  tags: ['Guns','Violence','Regulations','Gun Shows'],
  createdAt: 'Feb 24th, 2018',
};

const Topic = ({ match, history }) => (
  <div>
    <Header history={history} />
    <div className={styles.contain}>
      <div className={styles.headerContain}>
        <img src={sampleTopic.image} className={styles.image} alt="" />
        <div className={styles.headerContent}>
          <span className={styles.title}>{sampleTopic.title}</span>
          <span className={styles.desc}>{sampleTopic.description}</span>
          <div className={styles.topicTags}>
            {sampleTopic.tags.slice(0,4).map((tag, index) => (
              <div key={index} className={styles.topicTag}>{tag}</div>
            ))}
          </div>
          <ListItem 
            disabled={true}
            leftAvatar={<Avatar src={sampleTopic.user.imageUrl} style={{left: 0, top: 10}} />}
            primaryText={sampleTopic.user.name}
            secondaryText={sampleTopic.createdAt}
            style={{paddingLeft: 50, paddingTop: 14}}
          />
        </div>
      </div>
      <div className={styles.contentContain}>
        <h3>Content</h3>
      </div>
    </div>
  </div>
);

export default Topic;
