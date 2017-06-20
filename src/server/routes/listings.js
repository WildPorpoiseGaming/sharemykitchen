import express from 'express'
import ListingsModel from '../db/models/listing'
import {
  LISTINGS_INDEX,
  LISTINGS_SHOW,
  LISTINGS_CREATE,
  LISTINGS_UPDATE,
  LISTINGS_DELETE,
} from '../../shared/routes'


const router = express.Router()

router.route(LISTINGS_INDEX).get((req, res, next) => {
  ListingsModel
    .find({})
    .then((listings) => {
      res.json(listings)
    })
    .catch(next)
})

router.route(LISTINGS_SHOW).get((req, res, next) => {
  //parse the req url to get the listing id
  const id = req.params.id
  //query the database for the listing whose id matches the req id
  ListingsModel.find({ id: id }, (err, listing) => {
    if (listing) {
      res.json(listing)
    } else if (err) {
      next(err)
    } else if (!listing) {
      res.sendStatus(404)
    }
  })
})

router.route(LISTINGS_CREATE).post((req, res, next) => {
  //grab the listings object from res.body
  const listing = req.body
  //user model.create to add it to the database
  ListingsModel.create(listing, (err) => {
    //in the callback, error handle and send a success response back
    if (err) {
      next(err)
    }
    res.sendStatus(201)
  })
})

router.route(LISTINGS_UPDATE).put((req, res, next) => {
  //grab the information from req.body
  const update = req.body
  //grab the listing id from req.params
  const id = req.params.id

  //find the listing in the database
  ListingsModel.findById(id, (err, listing) => {
    //error handle, update listing and send response
    if (listing) {
      //update the listing. Grab each property from update.
      //If that property isn't being updates, default to the current value
      listing.name = update.name || listing.name
      listing.host_id = update.host_id || listing.host_id
      listing.address = update.address || listing.address
      listing.rating = update.rating || listing.rating
      listing.pictures = update.pictures || listing.pictures
      listing.features = update.features || listing.features
      listing.rate = update.rate || listing.rate
      listing.area = update.area || listing.area
      //save the updated listing
      listing.save((error, updatedListing) => {
        if (error) {
          next(error)
        }
        res.json(updatedListing)
      })
    } else if (!listing) {
      res.sendStatus(404)
    } else if (err) {
      next(err)
    }
  })
})

router.route(LISTINGS_DELETE).delete((req, res, next) => {
  //grab the listing id from the req.params
  const id = req.params.id
  //use findByIdAndRemove
  ListingsModel.findByIdAndRemove(id, (err, listing) => {
    //error handle
    if (listing) {
      res.json(listing)
    } else if (!listing) {
      res.sendStatus(404)
    } else if (err) {
      next(err)
    }
  })
})

export default router
