import { posts } from "../data.js";

function index(req, res) {
  const result = {
    info: {
      count: posts.length,
    },
    result: posts,
  }
  res.json(result)
}

function show(req, res) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'invalid ID' });
  }
  const post = posts.find((post) => post.id === id);
  if (post === undefined) {
    return res.status(404).json({ error: 'no post found' });
  }
  res.json(post);
}


const controller = {
  index,
  show
};

export default controller