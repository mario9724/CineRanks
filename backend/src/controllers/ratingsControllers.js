import pool from "../db/pool.js";
import calculateCineScore from "../utils/calculateCineScore.js";

export const addRating = async (req, res) => {
  const { movieId, userId, rating } = req.body;

  await pool.query(
    "INSERT INTO ratings (movie_id, user_id, rating) VALUES ($1, $2, $3)",
    [movieId, userId, rating]
  );

  res.json({ success: true });
};

export const getRatings = async (req, res) => {
  const { movieId } = req.params;

  const result = await pool.query(
    "SELECT rating FROM ratings WHERE movie_id = $1",
    [movieId]
  );

  const cineScore = calculateCineScore(result.rows.map(r => r.rating));

  res.json({ ratings: result.rows, cineScore });
};
