import React from 'react';
import { Card, CardMedia } from 'material-ui';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';

import styles from './Topics.css';

const sampleTopics = [
  {
    user: {
      email: 'johndoes@email.com',
      name: 'Johnathan Doeth',
      imageUrl: 'http://services.expreso.ec/Granasa/img/',
    },
    title: 'Gun Control',
    image: 'https://d18lkz4dllo6v2.cloudfront.net/cumulus_uploads/entry/2018-02-21/Gun%20control.jpg?w=660',
    description: 'Regulate the manufacture, sale, transfer, possession, modification, or use of firearms by civilians.',
    tags: ['Guns','Violence','Regulations','Gun Shows'],
    createdAt: 'Feb 24th, 2018',
  },
  {
    user: {
      email: 'johndoes@email.com',
      name: 'Johnathan Doeth',
      imageUrl: 'http://services.expreso.ec/Granasa/img/',
    },
    title: 'Gun Control',
    image: 'https://d18lkz4dllo6v2.cloudfront.net/cumulus_uploads/entry/2018-02-21/Gun%20control.jpg?w=660',
    description: 'Regulate the manufacture, sale, transfer, possession, modification, or use of firearms by civilians.',
    tags: ['Guns','Violence','Regulations','Gun Shows'],
    createdAt: 'Feb 24th, 2018',
  },
  {
    user: {
      email: 'johndoes@email.com',
      name: 'Johnathan Doeth',
      imageUrl: 'http://services.expreso.ec/Granasa/img/',
    },
    title: 'Gun Control',
    image: 'https://d18lkz4dllo6v2.cloudfront.net/cumulus_uploads/entry/2018-02-21/Gun%20control.jpg?w=660',
    description: 'Regulate the manufacture, sale, transfer, possession, modification, or use of firearms by civilians.',
    tags: ['Guns','Violence','Regulations','Gun Shows','Yeehaw'],
    createdAt: 'Feb 24th, 2018',
  },
  {
    user: {
      email: 'johndoes@email.com',
      name: 'Johnathan Doeth',
      imageUrl: 'http://services.expreso.ec/Granasa/img/',
    },
    title: 'Gun Control',
    image: 'https://d18lkz4dllo6v2.cloudfront.net/cumulus_uploads/entry/2018-02-21/Gun%20control.jpg?w=660',
    description: 'Regulate the manufacture, sale, transfer, possession, modification, or use of firearms by civilians.',
    tags: ['Guns','Violence','Regulations','Gun Shows'],
    createdAt: 'Feb 24th, 2018',
  },
  {
    user: {
      email: 'johndoes@email.com',
      name: 'Johnathan Doeth',
      imageUrl: 'http://services.expreso.ec/Granasa/img/',
    },
    title: 'Gun Control',
    image: 'https://d18lkz4dllo6v2.cloudfront.net/cumulus_uploads/entry/2018-02-21/Gun%20control.jpg?w=660',
    description: 'Regulate the manufacture, sale, transfer, possession, modification, or use of firearms by civilians.',
    tags: ['Guns','Violence','Regulations','Gun Shows'],
    createdAt: 'Feb 24th, 2018',
  },
]

const Topics = ({ history }) => (
  <div>
    <Header history={history} />
    <div className={styles.grid}>
      {sampleTopics.map((topic, index) => (
        <div key={index} className={styles.gridItem}>
          <Link to='/topic/x' style={{textDecoration: 'none'}}>
            <Card>
              <CardMedia>
                <img src={topic.image} className={styles.topicImage} alt="" />
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
      <div className={styles.gridItem}>
        <Link to='/createTopic' style={{textDecoration: 'none'}}>
          <div className={styles.createButton}>
            Create<br/>Topic
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Topics;
