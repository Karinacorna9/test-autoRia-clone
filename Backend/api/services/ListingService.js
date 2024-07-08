const ListingModel = require('../models/Listing');

class ListingService {
    async getListings() {
        return ListingModel.find().exec();
    }

    async getListingById(id) {
        return ListingModel.findById(id).exec();
    }

    async createListing(listingData) {
        const listing = new ListingModel(listingData);
        return listing.save();
    }

    async updateListing(id, listingData) {
        return ListingModel.findByIdAndUpdate(id, listingData, { new: true }).exec();
    }

    async deleteListing(id) {
        return ListingModel.findByIdAndRemove(id).exec();
    }
}

module.exports = ListingService;