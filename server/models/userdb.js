var mongoose = require('mongoose')
var Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10

var userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  }
})
userSchema.pre('save', function (next) {
  var user = this

  if (!user.isModified('password')) return next
  bcrypt.genSalt(SALT_WORK_FACTOR, function (error, salt) {
    if (error) return next(error)

    bcrypt.hash(user.password, salt, function (error, hash) {
      if (error) return next(error)

      user.password = hash
      next()
    })
  })
})

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (error, isMatch) {
    if (error) return cb(error)
    cb(null, isMatch)
  })
}

var user = mongoose.model('user', userSchema)

module.exports = user
