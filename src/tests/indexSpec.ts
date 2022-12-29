import app from '../index';
import supertest from 'supertest';

const request: supertest.SuperTest<supertest.Test> = supertest(app);

// ENDPOINT CHECKER SUITE
describe('Check all endpoints', (): void => {
    describe(' GET /api ', (): void => {
        it('should respond with OK', async (): Promise<void> => {
            const response: supertest.Response = await request.get('/api');
            expect(response.statusCode).toBe(200);
        });
    });
});

// RESIZING SERVICE TESTS
describe('Check all resizing', (): void => {
    describe(' Resize with valid parameter ', (): void => {
        it('should respond with OK', async (): Promise<void> => {
            const response: supertest.Response = await request.get('/api');
            expect(response.statusCode).toBe(200);
        });
    });
});

