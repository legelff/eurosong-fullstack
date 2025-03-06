const express = require('express');
const { PrismaClient } = require("@prisma/client");

const router = express.Router();

const prisma = new PrismaClient();

/* GET */
router.get('/', async (req, res, next) => {
  const data = await prisma.artists.findMany();

  res.json(data);
});

// req comes from frontend
router.post('/', async (req, res, next) => {
  const checkArtists = await prisma.artists.findMany({
    where: {
      name: req.body.name
    }
  })

  if (checkArtists.length > 0) {
    res.json({
      "message": "artist duplicate found!"
    })
  }

  else {
    const newArtist = await prisma.artists.create({
      data: {
        name: req.body.name
      }
    })
  }

  res.json(newArtist);
})

module.exports = router;