import express from 'express'; 
import postsRouter from "./routers/posts.js";

const app = express();
const port = 3006;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('server works')
})

app.use('/posts', postsRouter)

app.listen(port, function () {
  console.log("Server is listening on port: " + port);
});