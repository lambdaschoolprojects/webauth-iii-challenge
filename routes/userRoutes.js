const express = require('express');

const router = express.Router();
const db = require('../data/db');

router.get('/', async (req, res) => {
    const users = await db.getUsers();

    res.status(200).json({users});
})

router.post('/', async (req, res) => {

    try {
        const result = await db.addUser(req.body);

        if (result)
            res.status(201).json({ message: "User created" });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }

})

module.exports = router;