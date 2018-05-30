import { Server } from './app';
const { app } = new Server();

const server = app.listen(app.get('port'), () => {
    console.log(`Server is listening on port ${app.get('port')} - ${app.get('env')}`)
});

export default server;