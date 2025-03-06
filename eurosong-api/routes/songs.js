var express = require('express');
const { PrismaClient } = require("@prisma/client");

const router = express.Router();

const prisma = new PrismaClient();

/* GET . */
router.get('/', async (req, res, next) => {
  const data = await prisma.songs.findMany();

  res.json(data);
});

// post
router.post('/', async (req, res, next) => {
  const newSong = await prisma.songs.create({
    data: {
      name: req.body.name,
      artist_id: req.body.artist_id
    }
  }) 

  res.json(newSong);
});

module.exports = router;
