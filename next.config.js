const {PHASE_DEVELOPMENT_SERVER, PHA} = require('next/constants');

module.exports = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'atanasoskabrankica1',
        mongodb_password: 'kEv4a6e9oxR3dZEu',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-blog-dev',
      },
    };
  }
  return {
    env: {
      mongodb_username: 'atanasoskabrankica1',
      mongodb_password: 'kEv4a6e9oxR3dZEu',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-blog',
    },
  };
};
