import express from 'express';
import { posts } from '../data.js'
import postsController from '../controller/postsController.js'

const router = express.Router();

// INDEX
router.get('/', postsController.index)

// SINGLE POST (SHOW)
router.get('/:id', postsController.show)

// CREATE
router.post('/', (req, res) => {
  res.send('create new post route')
})

// UPDATE POST
router.put('/:id', (req, res) => {
  res.send('update existing post route')
})

// MODIFY 
router.patch('/:id', (req, res) => {
  res.send('modify existing post route')
})

// DELETE POST 
router.delete('/:id', (req, res) => {
  res.send('delete existing post')
})

export default router