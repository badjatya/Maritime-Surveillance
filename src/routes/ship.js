const router = require("express").Router();

// Importing Controllers
const {
  getShips,
  getShipById,
  getShipByShipId,
  getShipsByPolygonInput,
} = require("../controllers/ship");

// Ship Routes
router.route("/").get(getShips);

router.route("/:id").get(getShipById);

router.route("/search/:id").get(getShipByShipId);
router.route("/polygon").post(getShipsByPolygonInput);

module.exports = router;
