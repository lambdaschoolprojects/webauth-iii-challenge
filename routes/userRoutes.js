const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const keys = require('../config/keys');

const router = express.Router();
const db = require('../data/db');

function generateToken(user) {
    return jwt.sign({
        userId: user.id
    },
        keys.SECRET_KEY,
    {
        expiresIn: '1h'
    });
}

router.get('/users', async (req, res) => {
    const users = await db.getUsers();

    res.status(200).json({users});
});

router.post('/register', async (req, res) => {
        let { password } = req.body;
        password = bcrypt.hashSync(password, 14);

    try {
        const result = await db.addUser({...req.body, password });

        if (result)
            res.status(201).json({ message: "User created" });
        else
            res.status(400).json({ message: "Failed to create user."})
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }

});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await db.getUserByUsername(username);

        console.log(user);

        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);

            return res.status(200).json({
                message: "Welcome",
                authToken: token
            });
        } else {
            return res.status(403).json({ message: "You shall not pass." });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({err});
    }
})

module.exports = router;