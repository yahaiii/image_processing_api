import express from 'express';
import path from 'path';
import fs from 'fs';
import { promises as fsPromises } from 'fs';
import _resizeImage from '../utils/resize';

const routes = express.Router();

routes.get('/', async (req: express.Request, res: express.Response) => {
    try {
        const filename: string = req.query.filename as string;
        const width: number = parseInt(req.query.width as string);
        const height: number = parseInt(req.query.height as string);
        const pathToResized: string = path.resolve(__dirname, `../../images/resized/${filename}-${height}x${width}.jpg`);

        console.log(pathToResized);

        console.log('before _resizeImage');
        if (!fs.existsSync(pathToResized)) {
            const image = await _resizeImage(filename, height, width);
            fsPromises.writeFile(pathToResized, image);
            res.send(pathToResized);
            console.log('with _resizeImage');
        }
        console.log('after _resizeImage');
    } catch (error) {
        res.send(error);
    }
});

export default routes;