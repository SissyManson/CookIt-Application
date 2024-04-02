const env = process.env.NODE_ENV || 'development';

const config = {
   development: {
      port: process.env.PORT || 3030,
      dbURL: 'mongodb+srv://sdancheva9:%24uPer%24Trong_P%40ssw0rd@cook-it.5coiwyw.mongodb.net/?retryWrites=true&w=majority&appName=cook-it',
      origin: ['http://localhost:4200', 'http://localhost:5555'],
   },
   production: {
      port: process.env.PORT || 3030,
      dbURL: process.env.DB_URL_CREDENTIALS,
      origin: [],
   },
};

module.exports = config[env];
