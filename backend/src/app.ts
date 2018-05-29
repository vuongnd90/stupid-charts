import * as express from 'express';
import * as path from 'path';
import * as HomeController from './controllers/home';

const app = express();

app.set('port', process.env.PORT || 3001);
app.set("views", path.join(__dirname, "../views"));
app.set('view engine', 'pug');
app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

app.get('/', HomeController.index)

export default app;