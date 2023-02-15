const express = require('express');
const slugify = require('slugify');

const auth = require('../middleware/auth');
const { uploadTypeRoom } = require('../middleware/uploadImage');
const tipe_kamar = require('../models/index').tipe_kamar;
const kamar = require('../models/index').kamar;

const app = express();

const slugOptions = {
  replacement: '-',
  remove: /[*+~.()'"!:@]/g,
  lower: true,
  strict: true,
  locale: 'id'
};

/**
 * @apiRoutes {get} /hotel/type-room/
 * @apiName GetAllTypeRoom
 * @apiGroup TypeRoom
 * @apiDescription Get all type room data
 */
app.get('/', async (req, res) => {
  await tipe_kamar.findAll({ include: ['kamar'] })
  .then(result => res.json({ data: result }))
  .catch(error => res.json({ message: error.message }))
});

/**
 * @apiRoutes {get} /hotel/type-room/:slug
 * @apiName GetTypeRoomById
 * @apiGroup TypeRoom
 * @apiDescription Get type room data by slug
 */
app.get('/:slug', async (req, res) => {
  let params = { slug: req.params.slug };

  await tipe_kamar.findOne({ where: params, include: ['kamar'] })
  .then(result => res.json({ data: result }))
  .catch(error => res.json({ message: error.message }))
});

/**
 * @apiRoutes {post} /hotel/type-room/
 * @apiName PostTypeRoom
 * @apiGroup TypeRoom
 * @apiDescription Insert type room data
 */
app.post('/', uploadTypeRoom.array('foto', 5), auth, async (req, res) => {
  if(!req.file) return res.json({ message: "No file uploaded" })

  let finalImageURL = req.protocol + '://' + req.get('host') + '/usr/' + req.file.filename;

  // req.files.forEach((file) => {
  //   let finalImageURL = req.protocol + '://' + req.get('host') + '/img/' + file.filename;
  //   finalImageArrayURL.push(finalImageURL);
  // });

  let data = {
    nama_tipe_kamar: req.body.nama_tipe_kamar,
    slug: slugify(req.body.nama_tipe_kamar, slugOptions),
    harga: req.body.harga,
    deskripsi: req.body.deskripsi,
    foto: finalImageURL
  }

  await tipe_kamar.create(data)
  .then(result => res.json({ success: 1, message: "Data has been inserted", data: result }))
  .catch(error => res.json({ message: error.message }))
});

/**
 * @apiRoutes {put} /hotel/type-room/
 * @apiName PutTypeRoom
 * @apiGroup TypeRoom
 * @apiDescription Update type room data
 */
app.put('/', uploadTypeRoom.array('foto', 5), auth, async (req, res) => {
  if(!req.file) return res.json({ message: "No file uploaded" })

  let params = { id_tipe_kamar: req.body.id_tipe_kamar };
  let data = {
    nama_tipe_kamar: req.body.nama_tipe_kamar,
    slug: slugify(req.body.nama_tipe_kamar, slugOptions),
    harga: req.body.harga,
    deskripsi: req.body.deskripsi
  }

  if(req.file) {
    let delImg = await tipe_kamar.findOne({ where: params });

    if(delImg) {
      let oldImg = await tipe_kamar.findOne({ where: params });
      let oldImgName = oldImg.foto.replace(req.protocol + '://' + req.get('host') + '/img/', '');

      let loc = path.join(__dirname, '../public/img/', oldImgName);
      fs.unlink(loc, (err) => console.log(err));

      let finalImageURL = req.protocol + '://' + req.get('host') + '/img/' + req.file.filename;
      data.foto = finalImageURL;

      // let delImgName = delImg.foto.replace(req.protocol + '://' + req.get('host') + '/img/', '');
      // delImgName.forEach((img) => {
      //   let imgName = img.split('/').pop();

      //   let loc = path.join(__dirname, '../public/img/' + imgName);
      //   fs.unlinkSync(loc, (err) => console.log(err));
      // });
    }

    // let finalImageArrayURL = [];

    // req.files.forEach((file) => {
    //   let finalImageURL = req.protocol + '://' + req.get('host') + '/img/' + file.filename;
    //   finalImageArrayURL.push(finalImageURL);
    // });

    // data.foto = finalImageArrayURL;
  }

  await tipe_kamar.update(data, { where: params })
  .then(result => res.json({ success: 1, message: "Data has been updated" }))
  .catch(error => res.json({ message: error.message }))
});

/**
 * @apiRoutes {delete} /hotel/type-room/:id
 * @apiName DeleteTypeRoom
 * @apiGroup TypeRoom
 * @apiDescription Delete type room data
 */
app.delete('/:id', auth, async (req, res) => {
  let params = { id_tipe_kamar: req.params.id };

  let delImg = await tipe_kamar.findOne({ where: params });
  if(delImg) {
    let delImgName = delImg.foto.replace(req.protocol + '://' + req.get('host') + '/img/', '');
    let loc = path.join(__dirname, '../public/img/', delImgName);
    fs.unlink(loc, (err) => console.log(err));
  }
  
  // let delImg = await tipe_kamar.findOne({ where: params });
  // if(delImg) {
  //   let delImgName = delImg.foto;
  //   delImgName.forEach((img) => {
  //     let imgName = img.split('/').pop();

  //     let loc = path.join(__dirname, '../public/img/' + imgName);
  //     fs.unlinkSync(loc, (err) => console.log(err));
  //   });
  // }

  await tipe_kamar.destroy({ where: params })
  .then(result => res.json({ success: 1, message: "Data has been deleted" }))
  .catch(error => res.json({ message: error.message }))
});

module.exports = app;
