const hashPassword = require('../utils/hash')

const{
    signToken
} = require('../auth');

const {addUser, userLogin} = require('../db')

const register = async (req, res) => {
    try{
        const user = await addUser({...req.body, password : hashPassword(req.body.password)});
        res.send(user);
    } catch(err){
        res.send(err.message);
    }
}

const login = async(req, res) => {
    try{
        const{email, password} = req.body
        const user = await userLogin(req.body);
        const hash = hashPassword(password);
    if(user.email===email && user.password===hash){
        delete user.password;
        const token = signToken(user)
        res.json({token})
        
    } else if(user === null){
        res.status(401).json({message: 'Invalid credentials'})
    } 
    else {
        res.status(401).json({message: 'Invalid credentials'})
    }
    } catch(err){
        res.send(err.message);
    }
}

const profile =  (req, res) => {
    delete req.user.password
    res.send(req.user)
}

module.exports = {
    register,
    login,
    profile
}