import {Router, Request, Response, ErrorRequestHandler} from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.render('all', {
    layout: false,
    showTitle: true,
    helpers: {
      foo() {
        return 'foo.';
      },
      bar() {
        return 'This is the bar() function';
      },
    },
  });
});

export default router;
