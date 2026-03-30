import express from 'express';

export const app = express();

app.get('/', (req, res) => {
   console.log(req.headers);
   res.send('Health Check');
});
