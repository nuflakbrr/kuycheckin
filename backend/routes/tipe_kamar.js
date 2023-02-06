const express = require('express');

const auth = require('../middleware/auth');
const { uploadTypeRoom } = require('../middleware/uploadImage');
const tipe_kamar = require('../models/index').tipe_kamar;
const kamar = require('../models/index').kamar;

const app = express();

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
 * @apiRoutes {get} /hotel/type-room/:id
 * @apiName GetTypeRoomById
 * @apiGroup TypeRoom
 * @apiDescription Get type room data by id
 */
app.get('/:id', async (req, res) => {
  let params = { id_tipe_kamar: req.params.id };

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

  let finalImageArrayURL = [];

  req.files.forEach((file) => {
    let finalImageURL = req.protocol + '://' + req.get('host') + '/img/' + file.filename;
    finalImageArrayURL.push(finalImageURL);
  });

  let data = {
    nama_tipe_kamar: req.body.nama_tipe_kamar,
    harga: req.body.harga,
    deskripsi: req.body.deskripsi,
    foto: finalImageArrayURL
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
app.put('/:id', uploadTypeRoom.array('foto', 5), auth, async (req, res) => {
  if(!req.file) return res.json({ message: "No file uploaded" })

  let params = { id_tipe_kamar: req.params.id };
  let data = {
    nama_tipe_kamar: req.body.nama_tipe_kamar,
    harga: req.body.harga,
    deskripsi: req.body.deskripsi
  }

  if(req.files) {
    let delImg = await tipe_kamar.findOne({ where: params });

    if(delImg) {
      let delImgName = delImg.foto;
      delImgName.forEach((img) => {
        let imgName = img.split('/').pop();

        let loc = path.join(__dirname, '../public/img/' + imgName);
        fs.unlinkSync(loc, (err) => console.log(err));
      });
    }

    let finalImageArrayURL = [];

    req.files.forEach((file) => {
      let finalImageURL = req.protocol + '://' + req.get('host') + '/img/' + file.filename;
      finalImageArrayURL.push(finalImageURL);
    });

    data.foto = finalImageArrayURL;
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
    let delImgName = delImg.foto;
    delImgName.forEach((img) => {
      let imgName = img.split('/').pop();

      let loc = path.join(__dirname, '../public/img/' + imgName);
      fs.unlinkSync(loc, (err) => console.log(err));
    });
  }

  // let delImg = await tipe_kamar.findOne({ where: params });
  // if(delImg) {
  //   let delImgName = delImg.foto;
  //   let loc = path.join(__dirname, '../public/img/', delImgName);
  //   fs.unlink(loc, (err) => console.log(err));
  // }

  await tipe_kamar.destroy({ where: params })
  .then(result => res.json({ success: 1, message: "Data has been deleted" }))
  .catch(error => res.json({ message: error.message }))
});

module.exports = app;
