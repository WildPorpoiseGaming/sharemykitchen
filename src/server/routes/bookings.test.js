import request from 'supertest'
import faker from 'faker'
import mongoose from 'mongoose'

import app from '../'
import {
  // USERS_INDEX,
  BOOKINGS_INDEX,
  BOOKINGS_CREATE,
  bookingsShowRoute,
  bookingsUpdateRoute,
  bookingsDeleteRoute,
} from '../../shared/routes'
import BookingModel from '../db/models/bookings'
// import UserModel from '../db/models/user'
import ListingModel from '../db/models/listing'

describe('BOOKINGS', () => {
  let server

  beforeEach((done) => {
    if (!server) {
      server = app.listen(8001)
    }
    BookingModel.remove({}).then(done)
  })

  afterEach((done) => {
    BookingModel.remove({}).then(done)
    server.close()
  })
  describe(`GET ${BOOKINGS_INDEX}`, () => {
    const URI = `/api${BOOKINGS_INDEX}`

    test('should return a list', (done) => {
      request(server)
        .get(URI)
        .expect(200)
        .then((response) => {
          expect(Array.isArray(response.body)).toBe(true)
          done()
        })
    })
    xtest('should return a single booking', (done) => {
      const user = new BookingModel({
        name: faker.name.findName(),
        guest: true,
        host: true,
      })
      const listing = new ListingModel({
        name: faker.name.findName(),
        adress: faker.address.findAddress,
      })
      Promise.all([user.save(), listing.save()])
        .then(([newBooking, newListing]) => {
          const booking = new BookingModel({
            listing_id: newListing.id,
            guest_id: newBooking.id,
          })
          booking.save().then(() => {
            request(server)
              .get(URI)
              .expect(200)
              .then((response) => {
                expect(response.body.length).toBe(1)
                expect(response.body[0].listing_id).toBe(booking.listing_id)
                expect(response.body[0].host_id).toBe(booking.host_id)
                done()
              })
          })
        })
    })
  })
  describe(`GET ${bookingsShowRoute()}`, () => {
    test('should show a single booking object', (done) => {
      const booking = new BookingModel({
        listing_id: 21,
        guest_id: 12,
        rate: 2,
      })

      booking.save().then((newBooking) => {
        request(server)
          .get(`/api${bookingsShowRoute(newBooking._id)}`)
          .expect(200)
          .then((response) => {
            expect(typeof response.body).toBe('object')
            expect(response.body._id.toString()).toBe(newBooking._id.toString())
            done()
          })
      })
    })

    test('should return 404 if booking is not found', (done) => {
      request(server)
        .get(`/api${bookingsShowRoute(mongoose.Types.ObjectId())}`)
        .expect(404)
        .then(done)
    })

    test('should return 404 when booking has an invalid id', (done) => {
      request(server)
        .get(`/api${bookingsShowRoute(faker.random.number())}`)
        .expect(404)
        .then(done)
    })
  })

  describe(`POST ${BOOKINGS_CREATE}`, () => {
    test('should return the created booking\'s id', (done) => {
      const listingId = 32

      request(server)
        .post(`/api${BOOKINGS_CREATE}`)
        .field('listing_id', listingId)
        .expect(201)
        .then((response) => {
          expect(typeof response.body).toBe('object')
          expect(response.body._id).toBeTruthy()
          done()
        })
    })
  })

  describe(`PUT ${bookingsUpdateRoute()}`, () => {
    test('should return 200 when update is successful', (done) => {
      const currListingId = 32
      const prevListingId = 23

      const booking = new BookingModel({
        listing_id: prevListingId,
      })

      booking.save().then((newBooking) => {
        request(server)
          .put(`/api${bookingsUpdateRoute(newBooking._id)}`)
          .field('listing_id', currListingId)
          .expect(200)
          .then(done)
      })
    })

    test('should return the updated booking with correct updated fields', (done) => {
      const currListingId = 32
      const prevListingId = 23

      const booking = new BookingModel({
        listing_id: prevListingId,
      })

      booking.save().then((newBooking) => {
        request(server)
          .put(`/api${bookingsUpdateRoute(newBooking._id)}`)
          .field('listing_id', currListingId)
          .expect(200)
          .then((response) => {
            expect(typeof response.body).toBe('object')
            expect(response.body.name).toBe(currListingId)
            done()
          })
      })
    })

    test('should return 404 when booking with id does not exist', (done) => {
      request(server)
        .put(`/api${bookingsUpdateRoute(mongoose.Types.ObjectId())}`)
        .expect(404)
        .then(done)
    })

    test('should return 404 when booking has invalid id', (done) => {
      request(server)
        .put(`/api${bookingsUpdateRoute(faker.random.number())}`)
        .expect(404)
        .then(done)
    })
  })

  describe(`DELETE ${bookingsDeleteRoute()}`, () => {
    test('should return 200 when delete is successful', (done) => {
      const booking = new BookingModel()

      booking.save().then((newBooking) => {
        request(server)
        .delete(`/api${bookingsDeleteRoute(newBooking._id)}`)
        .expect(200)
        .then(done)
      })
    })

    test('should return the deleted booking\'s id upon successful operation', (done) => {
      const booking = new BookingModel()

      booking.save().then((newBooking) => {
        request(server)
          .delete(`/api${bookingsDeleteRoute(newBooking._id)}`)
          .expect(200)
          .then((response) => {
            expect(typeof response.body).toBe('object')
            expect(response.body._id).toBe(newBooking._id.toString())
            done()
          })
      })
    })

    test('should return 404 when booking with id does not exist', (done) => {
      request(server)
        .put(`/api${bookingsDeleteRoute(mongoose.Types.ObjectId())}`)
        .expect(404)
        .then(done)
    })

    test('should return 404 when booking has invalid id', (done) => {
      request(server)
        .put(`/api${bookingsDeleteRoute(faker.random.number())}`)
        .expect(404)
        .then(done)
    })
  })
})
