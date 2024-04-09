const User = require('../models/user.model')
const bcrypt = require('bcrypt');

async function createUser(userData){
    try {
        const user = new User(userData)
        return await user.save();
    } catch (error) {
        throw error
    }
}
async function getUserById(userId){
    try {
        const user = await User.findById(userId);
        console.log("User", user);
        console.log("User ID:", userId);

        return user;
    } catch (error) {
        console.error("Error fetching user by ID:", error);
        throw error; 
    }
}
async function authenticateUser(email,password){
    try {
        const user = await User.findOne({email})
        if(!user){
            throw new Error('User Not found')
        }
        const isPasswordValid  =  await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            throw new Error("Either Password or Email is wrong");
        }
        return user;
    } catch (error) {
        throw error
    }
}

module.exports = {
    createUser,authenticateUser,getUserById
}