const mongoose = require('mongoose')

const matchSchema = mongoose.Schema({
   playerOne: {
	  firstname: {
		 type: String,
		 required: true,
		 trim: true
	  },
	  lastname: {
		 type: String,
		 required: true,
		 trim: true
	  },
	  score: {
		 type: Number,
		 required: true
	  },
	  sets: [Number]
   },
   playerTwo: {
	  firstname: {
		 type: String,
		 required: true,
		 trim: true
	  },
	  lastname: {
		 type: String,
		 required: true,
		 trim: true
	  },
	  score: {
		 type: Number,
		 required: true
	  },
	  sets: [Number]
   },
   date: {
	  type: Date,
	  default: Date.now()
   }
})

const Match = mongoose.model('Match', matchSchema)
module.exports = {Match}
