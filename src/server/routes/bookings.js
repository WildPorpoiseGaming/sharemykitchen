import express from 'express'
import {
  BOOKINGS_INDEX,
  BOOKINGS_SHOW,
  BOOKINGS_CREATE,
  BOOKINGS_UPDATE,
  BOOKINGS_DELETE,
} from '../../shared/routes'

const router = express.Router()

router.route(BOOKINGS_INDEX, (req, res) => {})
router.route(BOOKINGS_SHOW, (req, res) => {})
router.route(BOOKINGS_CREATE, (req, res) => {})
router.route(BOOKINGS_UPDATE, (req, res) => {})
router.route(BOOKINGS_DELETE, (req, res) => {})

export default router
