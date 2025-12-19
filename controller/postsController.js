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
  // 201 OK created
}

function update(req, res) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'invalid ID' });
  }
  const index = posts.findIndex((post) => post.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'no post found' });
  }
  const data = req.body;
  if (data.title === undefined
    || data.title.length === 0
    || data.content === undefined
    || data.content.length === 0
    || data.image === undefined
    || data.image.length === 0
    || data.tag === undefined
    || data.tag.length === 0) {
    return res.status(400).json({ error: 'invalid data' });
  };
  const updatedPost = {
    id: id,
    title: data.title,
    content: data.content,
    tag: data.tag,
    image: data.image,
  }
  posts[index] = updatedPost;
  res.status(200).json(updatedPost)
  // 200 OK
}

function modify(req, res) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'invalid ID' });
  }
  const modifiedPost = posts.find((post) => post.id === id);
  if (modifiedPost === undefined) {
    return res.status(404).json({ error: 'no post found' });
  }
  const data = req.body;
  if (data.title !== undefined) {
    modifiedPost.title = data.title;
  }
  if (data.content !== undefined) {
    modifiedPost.content = data.content;
  }
  if (data.image !== undefined) {
    modifiedPost.image = data.image;
  }
  if (data.tag !== undefined) {
    modifiedPost.tag = data.tag;
  }
  res.status(200).json(modifiedPost)
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
  // 204 no content
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