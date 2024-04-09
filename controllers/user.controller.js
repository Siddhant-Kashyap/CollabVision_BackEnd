const userServices = require('../services/user.services')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

async function createUser(req,res,next){
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10); 
            const user = await userServices.createUser({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hashedPassword 
            });
            
            res.status(201).json(user);

        } catch (error) {
          if (error.code && error.code === 11000) {
            res.status(409).json({ error: 'Email already exists' });
          } else {
            res.status(500).json({ error: 'Internal Server Error' });
          }
          next(error);
        }
}
async function getUser(req, res, next) {
    try {
      const userId = req.params.id;
      const user = await userServices.getUserById(userId);
      console.log(user);
      if (!user) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.status(200).json(user);
      }
    } catch (error) {
      next(error);
    }
  }
  async function loginUser(req,res,next){
    try {
      const {email,password}= req.body;
      const user = await userServices.authenticateUser(email,password);
      console.log(user)
      const token = jwt.sign({userId:user._id,email:user.email},'developer_testing',{expiresIn:'12h'});
      res.status(200).json({token});
    } catch (error) {
      next(error)
    }
  }
  

  module.exports = {
    createUser,
    getUser,loginUser
  };