const express = require('express');
const authConfig = require('../config/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


const router = express.Router();

function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn : 86400,
    });
}

/* GET home page. */
router.get('/', function(req, res, next) {
    User.find((error, users) => {
        if(err){
            res.status(400).send(`Ocorreu um err: ${err}`)
        }
        res.json({users})
    });
});

router.post('/register', async (req,res) => {
    const {email} = req.body;
    try{
        if (await User.findOne({ email })){
            return res.status(400).send({ error: 'User already exists'});
        }
        const user = User.create(req.body);

        user.password = undefined;

        return res.send({
            user, 
            token: generateToken({ id: user.id}),
        });
    } catch (err) {
        return res.status(400).send({error: 'Erro ao criar usuario'});
    }

});

router.post('/authenticate', async (req, res) => {

    const { email, password } = req.body;
    
    const user = await User.findOne({ email }).select('+password');
  
    if ( !user )
        return res.status(400).send({ error: 'User not found' });
    
    
    if ( !await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Invalid Password' });

    user.password = undefined;
    
   

    res.send({ 
        user, 
        token: generateToken({ id: user.id}),
    });
});

module.exports = app => app.use('/auth', router);