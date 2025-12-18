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


const controller = {
  index
};

export default controller