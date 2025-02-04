import express from 'express';
import { firstController } from '../controllers/index.js';
import { genreController } from '../controllers/genreController.js';
import { searchArtist } from "../controllers/searchController.js";

const router = express.Router();

router.get('', firstController);
router.get('/genre/:number', genreController);
router.get("/api/search/:artist", searchArtist);

export default router;