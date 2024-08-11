const express = require('express');
require('../database/db');

const port = 8080;
const app = express();

app.listen(port, () => console.log(`Server is running on port ${port}`));
