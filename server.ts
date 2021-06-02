import * as express from 'express';
import * as path from 'path';

const app: express.Application = express();
const PORT: number | string = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'build'))); 

app.get('/', function (req: express.Request, res: express.Response) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log('Server is up!'));
