const mongoose = require('mongoose');

const dbUrl = 'mongodb://127.0.0.1:27017/simple-task-management';
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(dbUrl, dbOptions)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  });

