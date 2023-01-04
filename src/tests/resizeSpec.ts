import app from "..";
import supertest from 'supertest';
import { promises as fsPromises } from 'fs';
import path from "path";

const request: supertest.SuperTest<supertest.Test> = supertest(app);

//RESIZE UTIL CHECKER
describe('resizeImage', (): void => {
    it('should resize the image to the specified dimensions', async (): Promise<void> => {
      const filename = 'fjord';
      const width = 400;
      const height = 220;
  
      const response: supertest.Response = await request.get(`/resize?filename=${filename}&width=${width}&height=${height}`);
  
      expect(response.status).toBe(200);
    });

    it('should return an error if the parameters are missing', async () => {
        const response: supertest.Response = await request.get('/resize');
        expect(response.status).toEqual(400);
      });

      // Delete the resized images after each test
      afterEach(async () => {
        const resizedImagesPath = path.resolve(__dirname, '../../images/resized');
        const resizedImages = await fsPromises.readdir(resizedImagesPath);
        resizedImages.forEach(async (image) => {
          await fsPromises.unlink(path.resolve(resizedImagesPath, image));
        });
      });
      
});