export class Basic {
    constructor(account) {
        this.account = account;
    }

    canCreateListings() {
        return 5; // limit of 5 listings
    }

    canViewStatistics() {
        return false;
    }
}