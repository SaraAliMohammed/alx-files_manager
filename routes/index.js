import { Router } from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import FilesController from '../controllers/FilesController';

const router = Router();

router.get('/status', AppController.getStatus);

router.get('/stats', AppController.getStats);

router.post('/users', UsersController.postNew);

router.get('/connect', AuthController.getConnect);

router.get('/disconnect', AuthController.getDisconnect);

router.get('/users/me', UsersController.getMe);

router.post('/files', xTokenAuthenticate, FilesController.postUpload);
router.get('/files/:id', xTokenAuthenticate, FilesController.getShow);
router.get('/files', xTokenAuthenticate, FilesController.getIndex);
router.put('/files/:id/publish', xTokenAuthenticate, FilesController.putPublish);
router.put('/files/:id/unpublish', xTokenAuthenticate, FilesController.putUnpublish);
router.get('/files/:id/data', FilesController.getFile);

module.exports = router;
