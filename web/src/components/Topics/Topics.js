import React from 'react';

import Header from '../Header/Header';

const sampleTopics = [
  {
    user: {
      email: 'johndoes@email.com',
      name: 'Johnathan Doeth',
      imageUrl: 'http://services.expreso.ec/Granasa/img/',
    },
    title: 'Gun Control',
    description: 'Regulate the manufacture, sale, transfer, possession, modification, or use of firearms by civilians.',
    tags: ['Guns','Violence','Regulations','Gun Shows'],
    createdAt: 'Feb 24th, 2018',
  },
]

const Topics = ({ history }) => (
  <div>
    <Header history={history} />
    <h1>Topics</h1>
  </div>
);

export default Topics;
