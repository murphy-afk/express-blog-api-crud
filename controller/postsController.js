import { posts } from "../data.js";

function index(req, res) {
  const tag = req.query.tag;
  let filteredPosts = posts;
  if (tag !== undefined) {
    filteredPosts = posts.filter((post) => post.tag.includes(tag))
  }
  const result = {
    info: {
      count: filteredPosts.length,
    },
    result: filteredPosts,
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
  const data = req.body;
  if (data.title === undefined
    || data.title.length === 0
    || data.content === undefined
    || data.content.length === 0) {
    return res.status(400).json('invalid data');
  };
  const newId = posts[posts.length - 1].id + 1;
  const newPost = {
    id: newId,
    title: data.title,
    content: data.content,
    tag: data.tag,
    image: data.image,
  };
  posts.push(newPost);
  res.status(201).json(newPost);
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