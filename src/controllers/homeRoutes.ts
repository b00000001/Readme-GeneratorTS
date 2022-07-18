import {Router, Request, Response, ErrorRequestHandler} from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.render('home', {layout: false});
});

export default router;
