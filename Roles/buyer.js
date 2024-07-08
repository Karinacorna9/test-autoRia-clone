export class Buyer {
    constructor(user) {
        this.user = user;
    }

    canViewListings() {
        return true;
    }

    canCreateListings() {
        return false;
    }

    canUpdateListings() {
        return false;
    }

    canDeleteListings() {
        return false;
    }
}