const httpStatus = require('http-status')
const {Match} = require("../model/match");

const resultsController = {
   async getAllMatches(req, res, next) {
	  try {
		 const matches = await Match.find({})
		 res.status(httpStatus.OK).json(matches)
	  } catch (error) {
		 throw error
	  }
   },
   async addMatch(req, res, next) {
	  try {
		 if (req.body.data.password !== process.env.PASSWORD) return res.status(httpStatus.FORBIDDEN).send('error')
		 const match = await new Match(req.body.data)
		 match.save()
		 res.status(httpStatus.OK).json(match)
	  } catch (error) {
		 throw error
	  }
   },
   async removeMatch(req, res, next) {
	  try {
		 const match = await Match.findByIdAndDelete(req.body._id)
		 res.status(httpStatus.OK).json({msg: 'Deleted', match: match})
	  } catch (error) {
		 throw error
	  }
   },
}

module.exports = resultsController
