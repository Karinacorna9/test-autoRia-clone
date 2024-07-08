import supertest from 'upertest';
import app from '../../app';
import { Listings } from '../../components/Listings';

describe('Listings feature', () => {
    it('renders correctly and fetches data', async () => {
        const response = await supertest(app).get('/');
        expect(response.status).toBe(200);
        const html = response.text;
        expect(html).toContain('Listings');
        const listingsComponent = new Listings();
        expect(listingsComponent.state.data).toBeInstanceOf(Array);
    });

    it('creates a new listing and updates the UI', async () => {
        const response = await supertest(app)
            .post('/api/listings')
            .send({ name: 'New Listing', description: 'This is a new listing' });
        expect(response.status).toBe(201);
        const newListings = await supertest(app).get('/api/listings');
        expect(newListings.body).toContainEqual({ name: 'New Listing' });
        const html = await supertest(app).get('/');
        expect(html).toContain('New Listing');
    });
});