import express from 'express'
import {
  REVIEWS_INDEX,
  REVIEWS_SHOW,
  REVIEWS_CREATE,
  REVIEWS_UPDATE,
  REVIEWS_DELETE,
} from '../../shared/routes'

const router = express.Router()

router.route(REVIEWS_INDEX, (req, res) => {})
router.route(REVIEWS_SHOW, (req, res) => {})
router.route(REVIEWS_CREATE, (req, res) => {})
router.route(REVIEWS_UPDATE, (req, res) => {})
router.route(REVIEWS_DELETE, (req, res) => {})

export default router
