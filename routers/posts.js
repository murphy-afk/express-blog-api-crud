import express from 'express';
import postsController from '../controller/postsController.js'

const router = express.Router();

router.get('/', postsController.index);
router.get('/:id', postsController.show);
router.post('/', postsController.create);
router.put('/:id', postsController.update);
router.patch('/:id', postsController.modify);
router.delete('/:id', postsController.destroy);

export default router