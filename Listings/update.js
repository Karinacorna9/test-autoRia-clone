export async function updateListing(user, listingId, listingData) {
    if (!user.canUpdateListings()) {
        throw new Error('You do not have permission to update listings');
    }

    // update listing logic here
}