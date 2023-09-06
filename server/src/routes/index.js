const usersRouter = require('./users')

module.exports = (app) => {
    app.use('/user', usersRouter)
    app.use('/', usersRouter)
} 

