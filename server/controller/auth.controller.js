const httpStatus = require('http-status')

const authController = {
   login(req, res, next) {
	  try {
		 if (req.body.user === process.env.ADMIN && req.body.password === process.env.ADMIN_PASSOWRD) {
			res.cookie('x-access-token', process.env.TOKEN).status(httpStatus.OK).send(process.env.TOKEN)
		 } else {
			res.status(httpStatus.FORBIDDEN).send('ACCESS DENIED')
		 }
	  } catch (error) {
		 throw error
	  }
   },
   isAuth(req, res, next) {
	  let token = req.cookies['x-access-token']
	  if (token === process.env.TOKEN) {
		 res.status(httpStatus.OK).send('auth')
	  } else {
		 next()
	  }
   },
   logout (req, res, next) {
	  res.clearCookie('x-access-token').send('logout')
   }
}

module.exports = authController
