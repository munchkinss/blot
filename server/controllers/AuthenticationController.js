const Users = require('../models/userdb')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async signup (req, res) {
    var newuser = new Users({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      gender: req.body.gender,
      password: req.body.password

    })
    await newuser.save((error, user) => {
      if (error) {
        var word = 'username'
        if (!error.errmsg.includes(word)) {
          word = 'email'
        }
        res.status(400).send({ error: `${word} already exists` })
      } else {
        const userjson = user.toJSON()
        res.send({
          user: userjson,
          token: jwtSignUser(userjson)
        })
      }
    })
  },
  async login (req, res) {
    const { username, password } = req.body
    await Users.findOne({
      username: username
    }, function (error, user) {
      if (error) {
        res.status(500).send({
          error: 'error occured trying to loging please try again'
        })
      }
      if (user) {
        user.comparePassword(password, function (error, isMatch) {
          if (error) {
            res.status(403).send({
              error: 'invalid login'
            })
          }
          if (isMatch) {
            const userjson = user.toJSON()
            res.send({
              user: userjson,
              token: jwtSignUser(userjson)
            })
          } else {
            res.status(403).send({ error: 'The information provided is incorrect' })
          }
        })
      } else {
        res.status(403).send({ error: 'The information provided is incorrect' })
      }
    })
  }
}
