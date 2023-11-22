const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

router.get("/", (req, res) => {
  const sqlText = `
    SELECT * FROM "shoppingList"
    ORDER BY "id"`;
  pool
    .query(sqlText)
    .then((result) => {
      console.log("Got things back:", result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error in database query:", sqlText);
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
  const sqlText = `
  INSERT INTO "shoppingList"
  ("name", "quantity", "unit")
  VALUES
  ($1, $2, $3);`;
  const sqlValues = [req.body.name, req.body.quantity, req.body.unit];
  pool
    .query(sqlText, sqlValues)
    .then((result) => {
      console.log("Posted to Server:", sqlValues);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Error in database query:", sqlText);
      res.sendStatus(500);
    });
});

router.delete("/:id", (req, res) => {
  const sqlText = `
  DELETE FROM "shoppingList"
  WHERE "id" = $1`;
  const sqlValues = [req.params.id];
  pool
    .query(sqlText, sqlValues)
    .then((result) => {
      console.log("Deleted from database with ID:", req.params.id);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error in database query:", sqlText);
      res.sendStatus(500);
    });
});

router.put("/", (req, res) => {
  const sqlText = `
  UPDATE "shoppingList"
  SET "bought" = false`;
  pool
    .query(sqlText)
    .then((result) => {
      console.log("Updated bought to false everywhere");
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error in database query:", sqlText);
      res.sendStatus(500);
    });
});

router.delete("/", (req, res) => {
  const sqlText = `
  DELETE FROM "shoppingList"`;
  pool
    .query(sqlText)
    .then((result) => {
      console.log("Deleted everything");
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error in database query:", sqlText);
      res.sendStatus(500);
    });
});

router.put("/:id", (req, res) => {
  const sqlText = `
  UPDATE "shoppingList"
  SET "bought" = true
  WHERE "id" = $1`;
  const sqlValues = [req.params.id];
  pool
    .query(sqlText, sqlValues)
    .then((result) => {
      console.log("Updated bought to True in database with ID:", req.params.id);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error in database query:", sqlText);
      res.sendStatus(500);
    });
});

module.exports = router;
