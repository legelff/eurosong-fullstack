var express = require('express');
const { PrismaClient } = require("@prisma/client");

const router = express.Router();

const prisma = new PrismaClient();

/* GET. */
router.get('/', async (req, res, next) => {
  const votes = await prisma.votes.groupBy({
    by: ["song_id"],
    _sum: {
      points: true,
    },
    orderBy: {
      _sum: {
        points: "desc",
      },
    },
  });

  let songs = await prisma.songs.findMany({
    include: {
      artists: true
    }
  })

  songs = songs.map((song) => {
    const points = votes.find((vote) => vote.song_id == song.song_id)

    if (points) {
      song.points = points._sum.points;
    }

    else {
      song.points = null;
    }

    return song;
  })

  // Fetch song and artist names
//   const leaderboard = await Promise.all(
//     results.map(async (vote) => {
//       const song = await prisma.songs.findFirst({
//         where: { song_id: vote.song_id },
//         select: {
//           name: true,
//           artists: {
//             select: { name: true },
//           },
//         },
//       });

//       return {
//         song: song?.name || "Unknown Song",
//         artist: song?.artists?.name || "Unknown Artist",
//         totalPoints: vote._sum.points || 0,
//       };
//     })
//   );

  res.json(songs);
});

module.exports = router;
