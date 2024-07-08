export class Manager {
    constructor(user) {
        this.user = user;
    }

    canViewListings() {
        return true;
    }

    canCreateListings() {
        return true;
    }

    canUpdateListings() {
        return true;
    }

    canDeleteListings() {
        return true;
    }

    canManageUsers() {
        return true;
    }
}
