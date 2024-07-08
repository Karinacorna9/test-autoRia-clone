import supertest from 'upertest';
import app from '../../app';

describe('Listings API', () => {
    it('returns a list of listings', async () => {
        const response = await supertest(app).get('/api/listings');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    it('returns a single listing by ID', async () => {
        const response = await supertest(app).get('/api/listings/1');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id', 1);
    });

    it('creates a new listing', async () => {
        const response = await supertest(app)
            .post('/api/listings')
            .send({ name: 'New Listing', description: 'This is a new listing' });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
    });
});