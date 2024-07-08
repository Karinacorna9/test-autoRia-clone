export async function deleteListing(user, listingId) {
    if (!user.canDeleteListings()) {
        throw new Error('You do not have permission to delete listings');
    }

    // delete listing logic here
}