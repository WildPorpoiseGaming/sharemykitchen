import request from 'supertest'
import faker from 'faker'
import mongoose from 'mongoose'

import app from '../'
import {
  LISTINGS_INDEX,
  LISTINGS_CREATE,
  listingsShowRoute,
  listingsUpdateRoute,
  listingsDeleteRoute,
} from '../../shared/routes'
import ListingModel from '../db/models/listing'

describe('LISTINGS', () => {
  let server

  beforeEach((done) => {
    if (!server) {
      server = app.listen(8001)
    }
    ListingModel.remove({}).then(done)
  })

  afterEach((done) => {
    ListingModel.remove({}).then(done)
    server.close()
  })

  describe(`GET ${LISTINGS_INDEX}`, () => {
    const URI = `/api${LISTINGS_INDEX}`

    test('should return a list', (done) => {
      request(server)
        .get(URI)
        .expect(200)
        .then((response) => {
          expect(Array.isArray(response.body)).toBe(true)
          done()
        })
    })

    test('should return a single listing', (done) => {
      const listing = new ListingModel({
        name: 'Kitchen 1',
        host_id: 6,
        address: '221B Baker St.',
        rating: 8,
        pictures: ['jpeg', 'jpeg'],
        features: ['over', 'blender'],
        rate: 100,
        area: 'Westminster',
      })

      listing.save().then(() => {
        request(server)
          .get(URI)
          .expect(200)
          .then((response) => {
            expect(response.body.length).toBe(1)
            expect(response.body[0].name).toBe(listing.name)
            expect(response.body[0].host_id).toBe(listing.host_id)
            expect(response.body[0].address).toBe(listing.address)
            expect(response.body[0].rating).toBe(listing.rating)
            expect(response.body[0].pictures.length).toBe(listing.pictures.length)
            expect(response.body[0].features.length).toBe(listing.features.length)
            expect(response.body[0].rate).toBe(listing.rate)
            expect(response.body[0].area).toBe(listing.area)
            done()
          })
      })
    })
  })

  describe(`GET ${listingsShowRoute()}`, () => {
    test('should show a single listing object', (done) => {
      const listing = new ListingModel({
        name: 'Kitchen 1',
        host_id: 6,
        address: '221B Baker St.',
        rating: 8,
        pictures: ['jpeg', 'jpeg'],
        features: ['over', 'blender'],
        rate: 100,
        area: 'Westminster',
      })

      listing.save().then((newListing) => {
        request(server)
          .get(`/api${listingsShowRoute(newListing._id)}`)
          .expect(200)
          .then((response) => {
            expect(typeof response.body).toBe('object')
            expect(response.body._id.toString()).toBe(newListing._id.toString())
            done()
          })
      })
    })

    test('should return 404 if listing is not found', (done) => {
      request(server)
        .get(`/api${listingsShowRoute(mongoose.Types.ObjectId())}`)
        .expect(404)
        .then(done)
    })

    test('should return 404 when listing has an invalid id', (done) => {
      request(server)
        .get(`/api${listingsShowRoute(faker.random.number())}`)
        .expect(404)
        .then(done)
    })
  })

  describe(`POST ${LISTINGS_CREATE}`, () => {
    test('should return the created listing\'s id', (done) => {
      const listing = new ListingModel({
        name: 'Kitchen 1',
        host_id: 6,
        address: '221B Baker St.',
        rating: 8,
        pictures: ['jpeg', 'jpeg'],
        features: ['over', 'blender'],
        rate: 100,
        area: 'Westminster',
      })

      request(server)
        .post(`/api${LISTINGS_CREATE}`)
        .send(listing)
        .expect(201)
        .then((response) => {
          expect(typeof response.body).toBe('object')
          expect(response.body._id).toBeTruthy()
          done()
        })
    })
  })

  describe(`PUT ${listingsUpdateRoute()}`, () => {
    test('should return 200 when update is successful', (done) => {
      const listing = new ListingModel({
        name: 'Kitchen 1',
        host_id: 6,
        address: '221B Baker St.',
        rating: 8,
        pictures: ['jpeg', 'jpeg'],
        features: ['over', 'blender'],
        rate: 100,
        area: 'Westminster',
      })

      const currname = 'Super awesome kitch'

      listing.save().then((newListing) => {
        request(server)
          .put(`/api${listingsUpdateRoute(newListing._id)}`)
          .field('name', currname)
          .expect(200)
          .then(done)
      })
    })

    test('should return the updated listing with correct updated fields', (done) => {
      const listing = new ListingModel({
        name: 'Kitchen 1',
        host_id: 6,
        address: '221B Baker St.',
        rating: 8,
        pictures: ['jpeg', 'jpeg'],
        features: ['over', 'blender'],
        rate: 100,
        area: 'Westminster',
      })

      const currname = 'Super awesome kitch'

      listing.save().then((newListing) => {
        request(server)
          .put(`/api${listingsUpdateRoute(newListing._id)}`)
          .field('name', currname)
          .expect(200)
          .then((response) => {
            expect(typeof response.body).toBe('object')
            expect(response.body.name).toBe(currname)
            done()
          })
      })
    })

    test('should return 404 when listing with id does not exist', (done) => {
      request(server)
        .put(`/api${listingsUpdateRoute(mongoose.Types.ObjectId())}`)
        .expect(404)
        .then(done)
    })

    test('should return 404 when listing has invalid id', (done) => {
      request(server)
        .put(`/api${listingsUpdateRoute(faker.random.number())}`)
        .expect(404)
        .then(done)
    })
  })

  describe(`DELETE ${listingsDeleteRoute()}`, () => {
    test('should return 200 when delete is successful', (done) => {
      const listing = new ListingModel()

      listing.save().then((newlisting) => {
        request(server)
        .delete(`/api${listingsDeleteRoute(newlisting._id)}`)
        .expect(200)
        .then(done)
      })
    })

    test('should return the deleted listing\'s id upon successful operation', (done) => {
      const listing = new ListingModel()

      listing.save().then((newlisting) => {
        request(server)
          .delete(`/api${listingsDeleteRoute(newlisting._id)}`)
          .expect(200)
          .then((response) => {
            expect(typeof response.body).toBe('object')
            expect(response.body._id).toBe(newlisting._id.toString())
            done()
          })
      })
    })

    test('should return 404 when listing with id does not exist', (done) => {
      request(server)
        .put(`/api${listingsDeleteRoute(mongoose.Types.ObjectId())}`)
        .expect(404)
        .then(done)
    })

    test('should return 404 when listing has invalid id', (done) => {
      request(server)
        .put(`/api${listingsDeleteRoute(faker.random.number())}`)
        .expect(404)
        .then(done)
    })
  })
})
