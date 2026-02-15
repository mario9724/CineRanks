import { Router } from "express";
import { addRating, getRatings } from "../controllers/ratingsController.js";

const router = Router();

router.post("/", addRating);
router.get("/:movieId", getRatings);

export default router;
