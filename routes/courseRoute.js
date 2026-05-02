import express from 'express';
import * as courseController from '../controllers/courseController.js';
import { authCheck } from '../middleware/auth-middleware.js'; 

const router = express.Router();

router.use(authCheck);

router.get('/', courseController.getAll);
router.get('/:id', courseController.getById);
router.post('/', courseController.create);
router.put('/:id', courseController.update);
router.delete('/:id', courseController.remove);

export default router;