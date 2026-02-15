import express from "express";
import cors from "cors";
import ratingsRoutes from "./routes/ratings.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/ratings", ratingsRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
