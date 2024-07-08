const express = require('express');
const router = express.Router();
const listingController = require('../controllers/ListingController');
const userController = require('../controllers/UserController');

router.get('/listings', listingController.getListings);
router.get('/listings/:id', listingController.getListingById);
router.post('/listings', listingController.createListing);
router.put('/listings/:id', listingController.updateListing);
router.delete('/listings/:id', listingController.deleteListing);

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
