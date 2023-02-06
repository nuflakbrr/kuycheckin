const express = require('express');

const auth = require('../middleware/auth');
const pemesanan = require('../models/index').pemesanan;
const detail_pemesanan = require('../models/index').detail_pemesanan;
const tipe_kamar = require('../models/index').tipe_kamar;
const user = require('../models/index').user;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * @apiRoutes {get} /hotel/booking/
 * @apiName GetAllBooking
 * @apiGroup Booking
 * @apiDescription Get all booking data
 */
app.get('/', async (req, res) => {
  await pemesanan.findAll({ include: ['user', 'tipe_kamar', 'detail_pemesanan'] })
  .then(result => res.json({ data: result }))
  .catch(error => res.json({ message: error.message }))
});

/**
 * @apiRoutes {get} /hotel/booking/:id
 * @apiName GetBookingById
 * @apiGroup Booking
 * @apiDescription Get booking data by id
 */
app.get('/:id', async (req, res) => {
  let params = { id_pemesanan: req.params.id };

  await pemesanan.findOne({ where: params, include: ['user', 'tipe_kamar', 'detail_pemesanan'] })
  .then(result => res.json({ data: result }))
  .catch(error => res.json({ message: error.message }))
});

/**
 * @apiRoutes {post} /hotel/booking/
 * @apiName PostBooking
 * @apiGroup Booking
 * @apiDescription Insert booking data
 */
app.post('/', async (req, res) => {
  let data = {
    id_user: req.body.id_user,
    id_tipe_kamar: req.body.id_tipe_kamar,
    id_foto_kamar: req.body.id_foto_kamar,
    tanggal_pemesanan: req.body.tanggal_pemesanan,
    tanggal_checkin: req.body.tanggal_checkin,
    tanggal_checkout: req.body.tanggal_checkout,
    total_harga: req.body.total_harga,
    status: req.body.status,
  }

  await pemesanan.create(data)
  .then(result => res.json({ data: result }))
  .catch(error => res.json({ message: error.message }))
});

/**
 * @apiRoutes {put} /hotel/booking/:id
 * @apiName PutBooking
 * @apiGroup Booking
 * @apiDescription Update booking data
 */
app.put('/:id', async (req, res) => {
  let params = { id_pemesanan: req.params.id };
  let data = {
    id_user: req.body.id_user,
    id_tipe_kamar: req.body.id_tipe_kamar,
    id_foto_kamar: req.body.id_foto_kamar,
    tanggal_pemesanan: req.body.tanggal_pemesanan,
    tanggal_checkin: req.body.tanggal_checkin,
    tanggal_checkout: req.body.tanggal_checkout,
    total_harga: req.body.total_harga,
    status: req.body.status,
  }

  await pemesanan.update(data, { where: params })
  .then(result => res.json({ data: result }))
  .catch(error => res.json({ message: error.message }))
});

/**
 * @apiRoutes {delete} /hotel/booking/:id
 * @apiName DeleteBooking
 * @apiGroup Booking
 * @apiDescription Delete booking data
 */
app.delete('/:id', async (req, res) => {
  let params = { id_pemesanan: req.params.id };

  await pemesanan.destroy({ where: params })
  .then(result => res.json({ data: result }))
  .catch(error => res.json({ message: error.message }))
});

module.exports = app;