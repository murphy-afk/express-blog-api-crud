import express from 'express';
import postsRouter from "./routers/posts.js";
import { notFound } from './middleware/notFound.js';

const app = express();
const port = 3006;

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('server works')
})

app.use('/posts', postsRouter)

app.use(notFound)

app.listen(port, () => {
  console.log("Server is listening on port: " + port);
});