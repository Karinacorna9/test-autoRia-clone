const ListingService = require('../services/ListingService');
const listingService = new ListingService();

class ListingController {
    async getListings(req, res) {
        try {
            const listings = await listingService.getListings();
            res.json(listings);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error fetching listings' });
        }
    }

    async getListingById(req, res) {
        try {
            const id = req.params.id;
            const listing = await listingService.getListingById(id);
            res.json(listing);
        } catch (error) {
            console.error(error);
            res.status(404).json({ message: 'Listing not found' });
        }
    }

    async createListing(req, res) {
        try {
            const listingData = req.body;
            const listing = await listingService.createListing(listingData);
            res.json(listing);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: 'Error creating listing' });
        }
    }

    async updateListing(req, res) {
        try {
            const id = req.params.id;
            const listingData = req.body;
            const listing = await listingService.updateListing(id, listingData);
            res.json(listing);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: 'Error updating listing' });
        }
    }

    async deleteListing(req, res) {
        try {
            const id = req.params.id;
            await listingService.deleteListing(id);
            res.json({ message: 'Listing deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: 'Error deleting listing' });
        }
    }
}

module.exports = ListingController;