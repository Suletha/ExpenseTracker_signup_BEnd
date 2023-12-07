const express = require("express");

const purchaseController = require("../controllers/purchase-controller");

const router = express.Router();

// /purchase/premiummembership => POST
router.get("/premiummembership", purchaseController.purchasePremium);

// /purchase/getleaderboard =>
router.get("/getleaderboard", purchaseController.getLeaderBoard);


module.exports = router;