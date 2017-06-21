import express from 'express'
import mongoose from 'mongoose'

import {
  BOOKINGS_INDEX,
  BOOKINGS_SHOW,
  BOOKINGS_CREATE,
  BOOKINGS_UPDATE,
  BOOKINGS_DELETE,
} from '../../shared/routes'
import BookingModel from '../db/models/bookings'

const router = express.Router()

router.route(BOOKINGS_INDEX).get((req, res, next) => {
  BookingModel
    .find({})
    .then((bookings) => {
      console.log('bookings~~~~~', bookings)
      res.json(bookings)
    })
    .catch(next)
})

router.route(BOOKINGS_SHOW).get((req, res, next) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.sendStatus(404)
    return
  }

  BookingModel
    .findById(id)
    .then((booking) => {
      if (booking) {
        res.json(booking)
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})

router.route(BOOKINGS_CREATE).post((req, res, next) => {
  const booking = new BookingModel(req.body)

  booking
    .save()
    .then((newBooking) => {
      res.status(201).json(newBooking)
    })
    .catch(next)
})
router.route(BOOKINGS_UPDATE).put((req, res, next) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.sendStatus(404)
    return
  }

  BookingModel
    .findById(id)
    .then((booking) => {
      if (booking) {
        Object.assign({}, booking, req.body)
        booking
          .save()
          .then((updatedBooking) => {
            res.json(updatedBooking)
          })
      }
      res.sendStatus(404)
    })
    .catch(next)
})
router.route(BOOKINGS_DELETE).delete((req, res, next) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.sendStatus(404)
    return
  }

  BookingModel
    .findById(id)
    .then((booking) => {
      if (booking) {
        booking.remove()
        .then((deletedBooking) => {
          res.json(deletedBooking)
        })
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})

export default router
