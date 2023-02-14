const express = require('express');
const slugify = require('slugify');

const auth = require('../middleware/auth');
const pemesanan = require('../models/index').pemesanan;
const detail_pemesanan = require('../models/index').detail_pemesanan;
const tipe_kamar = require('../models/index').tipe_kamar;
const user = require('../models/index').user;

const app = express();

const slugOptions = {
  replacement: '-',
  remove: /[*+~.()'"!:@]/g,
  lower: true,
  strict: true,
  locale: 'id'
};

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
 * @apiRoutes {get} /hotel/booking/:slug
 * @apiName GetBookingById
 * @apiGroup Booking
 * @apiDescription Get booking data by slug
 */
app.get('/:slug', async (req, res) => {
  let params = { slug: req.params.slug };

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
    nomor_pemesanan: req.body.nomor_pemesanan,
    nama_pemesan: req.body.nama_pemesan,
    slug: slugify(req.body.nama_pemesan, slugOptions),
    email_pemesan: req.body.email_pemesan,
    tgl_pemesanan: req.body.tgl_pemesanan,
    tgl_check_in: req.body.tgl_check_in,
    tgl_check_out: req.body.tgl_check_out,
    nama_tamu: req.body.nama_tamu,
    jumlah_kamar: req.body.jumlah_kamar,
    id_tipe_kamar: req.body.id_tipe_kamar,
    status_pemesanan: req.body.status_pemesanan,
    id_user: req.body.id_user,
  }

  await pemesanan.create(data)
  .then(result => res.json({ data: result }))
  .catch(error => res.json({ message: error.message }))
});

/**
 * @apiRoutes {put} /hotel/booking/
 * @apiName PutBooking
 * @apiGroup Booking
 * @apiDescription Update booking data
 */
app.put('/', async (req, res) => {
  let params = { id_pemesanan: req.body.id_pemesanan };
  let data = {
    nomor_pemesanan: req.body.nomor_pemesanan,
    nama_pemesan: req.body.nama_pemesan,
    slug: slugify(req.body.nama_pemesan, slugOptions),
    email_pemesan: req.body.email_pemesan,
    tgl_pemesanan: req.body.tgl_pemesanan,
    tgl_check_in: req.body.tgl_check_in,
    tgl_check_out: req.body.tgl_check_out,
    nama_tamu: req.body.nama_tamu,
    jumlah_kamar: req.body.jumlah_kamar,
    id_tipe_kamar: req.body.id_tipe_kamar,
    status_pemesanan: req.body.status_pemesanan,
    id_user: req.body.id_user,
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