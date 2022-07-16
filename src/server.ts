import express, {Request, Response} from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../../src/static')));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../src/static/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server up at http://localhost.com:${PORT}`);
});
