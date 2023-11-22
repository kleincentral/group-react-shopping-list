const express = require('express');
const router = express.Router();
const pool = require("../modules/pool.js")


router.get('/', (req,res) => {
    const sqlText = `
    SELECT * FROM "shoppingList"`
    pool.query(sqlText)
    .then((result) => {
        console.log("Got things back:", result.rows)
        res.send(result.rows)
    }).catch((error) => {
        console.log("Error in database query:", sqlText)
        res.sendStatus(500)
    })
})

module.exports = router