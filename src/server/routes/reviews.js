import express from 'express'
import mongoose from 'mongoose'

import {
  REVIEWS_INDEX,
  REVIEWS_SHOW,
  REVIEWS_CREATE,
  REVIEWS_UPDATE,
  REVIEWS_DELETE,
} from '../../shared/routes'

import ReviewModel from '../db/models/review'

const router = express.Router()

router.route(REVIEWS_INDEX).get((req, res, next) => {
  ReviewModel
    .find({})
    .then((reviews) => {
      res.json(reviews)
    })
    .catch(next)
})

router.route(REVIEWS_SHOW).get((req, res, next) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.send(404)
  }
  ReviewModel
    .findById(id)
    .then((review) => {
      if (review) {
        res.json(review)
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})

router.route(REVIEWS_CREATE).post((req, res, next) => {
  const review = new ReviewModel(req.body)

  review
    .save()
    .then((newReview) => {
      res.status(201).json(newReview)
    })
    .catch(next)
})

router.route(REVIEWS_UPDATE).put((req, res, next) => {
  const { id } = req.params
  if (!mongoose.types.ObjectId.isValid(id)) {
    res.sendStatus(404)
    return
  }

  ReviewModel
    .findById(id)
    .then((review) => {
      if (review) {
        Object.assign({}, review, req.body)
        review
          .save()
          .then((updatedReview) => {
            res.json(updatedReview)
          })
      }
      res.sendStatus(404)
    })
    .catch(next)
})
router.route(REVIEWS_DELETE).delete((req, res, next) => {
  const { id } = req.params
  if (!mongoose.types.ObjectId.isValid(id)) {
    res.sendStatus(404)
    return
  }

  ReviewModel
    .findById(id)
    .then((review) => {
      if (review) {
        ReviewModel
        .remove(id)
        .then((deletedReview) => {
          res.json(deletedReview)
        })
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})

export default router
