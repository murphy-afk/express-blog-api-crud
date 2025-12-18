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

function create(req, res) {
  res.send('create new post')
}

function update(req, res) {
  res.send('update existing post')
}

function modify(req, res) {
  res.send('modify existing post')
}

function destroy(req, res) {
  const id = parseInt(req.params.id);
  const index = posts.findIndex((post) => post.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'no post found' });
  }
  posts.splice(index, 1);
  console.log(posts);
  res.sendStatus(204);
}


const controller = {
  index,
  show,
  create,
  update,
  modify,
  destroy
};

export default controller