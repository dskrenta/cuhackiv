'use strict';

const jwt = require('jwt-simple');

const getUser = require('../models/getUser');
const createUser = require('../models/createUser');
const { JWT_SECRET } = require('../utils/constants');
const verifyIdToken = require('../utils/verifyIdToken');

async function userAuthResolver({ client, args: { token } }) {
  try {
    const { sub, name, picture, email } = await verifyIdToken(token);

    const user = {
      id: sub,
      name: name,
      imageUrl: picture,
      email: email
    };

    const resUser = await getUser({ client, userId: sub });
    
    if (resUser) {
      return {
        user: resUser,
        token: jwt.encode(resUser, JWT_SECRET)
      };
    }

    const newUser = await createUser({ client, id: sub, name: name, imageUrl: picture, email: email });
        
    return {
      user: newUser,
      token: jwt.encode(user, JWT_SECRET)
    };
  }
  catch (error) {
    console.error(error);
  }
}

module.exports = userAuthResolver;