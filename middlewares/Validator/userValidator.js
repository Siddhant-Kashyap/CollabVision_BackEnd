const Joi = require('joi')

const userSchema = Joi.object({
    firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
})

function validateUser(req,res,next){
    const {error} =  userSchema.validate(req.body)
    if(error){
        res.status(400).json({error:error.details[0].message})
    }
    else{
        next();
    }
}

module.exports= validateUser