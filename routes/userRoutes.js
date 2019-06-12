const express = require('express');

const router = express.Router();
const db = require('../data/db');

router.get('/', async (req, res) => {
    const users = await db.getUsers();

    res.status(200).json({users});
})

module.exports = router;