export class Premium {
    constructor(account) {
        this.account = account;
    }

    canCreateListings() {
        return 20; // limit of 20 listings
    }

    canViewStatistics() {
        return true;
    }
}