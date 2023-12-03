const path = require('path');

const express = require('express');

const expenseController = require('../controllers/expense-controller');
const authenticationMW = require("../util/auth");
const router = express.Router();

// /expenses => GET
router.get(
    "/expenses",
    authenticationMW,
    expenseController.getExpenses
  );
  
  // /expenses => POST
  router.post(
    "/expenses",
    authenticationMW,
    expenseController.postExpenses
  );
  
  // /expense/:id => GET
  router.get(
    "/expense/:id",
    authenticationMW,
    expenseController.getExpense
  );
  
  // /expense/:id => DELETE
  router.delete(
    "/expense/:id",
    authenticationMW,
    expenseController.deleteExpense
  );

module.exports = router;
