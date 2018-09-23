const Joi = require('joi')
module.exports = {
  signup (req, res, next) {
    const schema = {
      name: Joi.string().alphanum(),
      username: Joi.string().alphanum(),
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9_&!@#%*]{8,32}$')
      ),
      gender: Joi.string()
    }
    /* eslint-disable no-unused-vars */
    const { error, value } = Joi.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'name':
          res.status(400).send({
            error: 'You must provide a Valid name'
          })
          break
        case 'username':
          res.status(400).send({
            error: 'No special character allowed'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Password must be 8-32 characters long'
          })
          break
        case 'email':
          res.status(400).send({
            error: 'Enter a Valid Email Address'
          })
          break
        case 'gender':
          res.status(400).send({
            error: 'Please select gender'
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid information'

          })
          break
      }
    } else {
      next()
    }
    /* eslint-enable no-unused-vars */
  }
}
