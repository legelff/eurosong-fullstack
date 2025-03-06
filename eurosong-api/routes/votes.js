var express = require('express');
const { PrismaClient } = require("@prisma/client");

const router = express.Router();

const prisma = new PrismaClient();

/* post NOTE: always secure post and gets, like url. */
router.post('/', async (req, res, next) => {
  const newVote = await prisma.votes.create({
    data: {
      points: req.body.points,
      song_id: req.body.song_id,
      voter_id: req.body.voter_id
    }
  })

  res.json(newVote);
});

module.exports = router;
