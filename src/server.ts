import express, {Request, Response} from 'express';
import path from 'path';
import {engine} from 'express-handlebars';
import router from './controllers';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../../src/public')));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '../../src/views'));
app.use(router);

app.listen(PORT, () => {
  console.log(`Server up at http://localhost.com:${PORT}`);
});
