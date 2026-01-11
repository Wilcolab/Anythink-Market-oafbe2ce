const express = require('express');
const app = express();
const port = process.env.PORT || 8001;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Express server is running!' });
});

app.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Express server listening on port ${port}`);
});
