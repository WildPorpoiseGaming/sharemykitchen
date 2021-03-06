/* eslint-disable spaced-comment,no-param-reassign */

import express from 'express'
import mongoose from 'mongoose'

import Listing from '../db/models/listing'

import {
  LISTINGS_INDEX,
  LISTINGS_SHOW,
  LISTINGS_CREATE,
  LISTINGS_UPDATE,
  LISTINGS_DELETE,
} from '../../shared/routes'


const router = express.Router()

router.route(LISTINGS_INDEX).get((req, res, next) => {
  Listing
    .find({})
    .then((listings) => {
      res.json(listings)
    })
    .catch(next)
})

router.route(LISTINGS_SHOW).get((req, res, next) => {
  //parse the req url to get the listing id
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.sendStatus(404)
    return
  }

  Listing
    .findById(id)
    .then((listing) => {
      if (listing) {
        res.json(listing)
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})

router.route(LISTINGS_CREATE).post((req, res, next) => {
  const listing = new Listing(req.body)

  listing
    .save()
    .then((newListing) => {
      res.status(201).json(newListing)
    })
    .catch(next)
})

router.route(LISTINGS_UPDATE).put((req, res, next) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.sendStatus(404)
    return
  }

  Listing
    .findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true },
    )
    .then((listing) => {
      if (listing) {
        res.json(listing)
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})

router.route(LISTINGS_DELETE).delete((req, res, next) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.sendStatus(404)
    return
  }

  Listing
    .findById(id)
    .then((listing) => {
      if (listing) {
        listing
          .remove()
          .then((deletedListing) => {
            res.json(deletedListing)
          })
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})

export default router
