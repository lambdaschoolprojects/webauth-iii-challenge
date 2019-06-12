const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
const db = require('../data/db');

router.get('/users', async (req, res) => {
    const users = await db.getUsers();

    res.status(200).json({users});
})

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

module.exports = router;