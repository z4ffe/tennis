const express = require('express')
const router = express.Router()
const resultsController = require('../controller/results.controller')

router.route('/match')
   .get(resultsController.getAllMatches)
   .post(resultsController.addMatch)
   .delete(resultsController.removeMatch)
module.exports = router
