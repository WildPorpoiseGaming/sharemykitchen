import request from 'supertest'
import faker from 'faker'

import app from '../'
import {
  REVIEWS_INDEX,
  REVIEWS_CREATE,
} from '../../shared/routes'

import User from '../db/models/user'
import Review from '../db/models/review'
import Listing from '../db/models/listing'
import Booking from '../db/models/booking'

describe('REVIEWS', () => {
  let server

  beforeEach((done) => {
    server = app.listen(8001)
    Review.remove({}).then(done)
  })

  afterEach((done) => {
    Review.remove({}).then(done)
    server.close()
  })

  test(`${REVIEWS_CREATE}: guest should be able to give reviews to the host
        after booking is paid`, (done) => {
    const host = new User()
    const guest = new User()
    const listing = new Listing({
      host_id: host.id,
    })
    const booking = new Booking({
      host_id: host.id,
      guest_id: guest.id,
      listing_id: listing.id,
      paid: true,
    })

    Promise.all([
      host.save(),
      guest.save(),
      listing.save(),
      booking.save(),
    ]).then(([h, g, l, b]) => {
      request(server)
        .post(`/api${REVIEWS_CREATE}`)
        .send({
          title: faker.name.title(),
          text: faker.lorem.text(),
          rating: 5,
          listing_id: l.id,
          host_id: h.id,
          guest_id: g.id,
          booking_id: b.id,
        })
        .expect(201)
        .then(done)
    })
  })

  test(`${REVIEWS_CREATE}: guest should not be allowed to give reviews to the host
        if booking is not yet paid error 402`, (done) => {
    const host = new User()
    const guest = new User()
    const listing = new Listing({
      host_id: host.id,
    })
    const booking = new Booking({
      host_id: host.id,
      guest_id: guest.id,
      listing_id: listing.id,
      paid: false,
    })

    Promise.all([
      host.save(),
      guest.save(),
      listing.save(),
      booking.save(),
    ]).then(([h, g, l, b]) => {
      request(server)
        .post(`/api${REVIEWS_CREATE}`)
        .send({
          title: faker.name.title(),
          text: faker.lorem.text(),
          rating: 5,
          listing_id: l.id,
          host_id: h.id,
          guest_id: g.id,
          booking_id: b.id,
        })
        .expect(402)
        .then(done)
    })
  })

  test(`${REVIEWS_INDEX}: guest should be able to read reviews of the host`, (done) => {
    const host = new User()
    const review1 = new Review({ host_id: host.id })
    const review2 = new Review({ host_id: host.id })

    Promise.all([
      host.save(),
      review1.save(),
      review2.save(),
    ]).then(() => {
      request(server)
        .get(`/api${REVIEWS_INDEX}?host_id=${host.id}`)
        .expect(200)
        .then((response) => {
          expect(response.body).toBeTruthy()
          expect(response.body.length).toBe(2)
          done()
        })
    })
  })
})
