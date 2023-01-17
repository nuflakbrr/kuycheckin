const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const app = express();

app.use(cors());

app.listen(8000, () => console.log('Server started on http://localhost:8000 🚀'));
