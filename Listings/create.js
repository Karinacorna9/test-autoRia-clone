export async function createListing(user, listingData) {
    if (!user.canCreateListings()) {
        throw new Error('You do not have permission to create listings');
    }

    // create listing logic here
}