import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';

import * as HomeController from './controllers/home';
import { checkAuth } from './midleware/basicAuth';

export class Server {
    public app: express.Application;
    private router: express.Router;

    constructor() {
        this.app = express();
        this.router = express.Router();
        this.config();
        this.createRouter();
    }

    private createRouter() {
        this.router.get("/*", HomeController.index);
    }

    private config() {
        this.app.set('port', process.env.PORT || 3005);
        this.app.set("views", path.join(__dirname, "../views"));
        this.app.set('view engine', 'pug');

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));

        this.app.use(checkAuth);
        this.app.use("/", this.router);
    }
}