const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('API is running ..'));

const PORT - process.env.port || 5000;
app.listner(PORT, () => console.log('server running on port ${PORT}'))

