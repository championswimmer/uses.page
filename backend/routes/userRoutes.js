const router = require("express").Router();
const md5 = require("md5");

var db = require("../database.js");

router.get("/:username", async (request, response) => {
  try {
    var sql = "select * from user where name = ?";
    var params = [request.params.username];
    db.get(sql, params, (err, row) => {
      if (err) {
        response.status(400).json({ error: err.message });
        return;
      }

      console.log("ROW =>", row, params);

      response.json({
        message: "success",
        data: row,
      });
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: err.message,
    });
  }
});

router.post("/", async (request, response) => {
  try {
    var errors = [];
    if (!request.body.password) {
      errors.push("No password specified");
    }
    if (!request.body.email) {
      errors.push("No email specified");
    }
    if (errors.length) {
      response.status(400).json({ error: errors.join(",") });
      return;
    }
    var data = {
      name: request.body.name,
      email: request.body.email,
      password: md5(request.body.password),
    };
    var sql = "INSERT INTO user (name, email, password) VALUES (?,?,?)";
    var params = [data.name, data.email, data.password];
    db.run(sql, params, function (err, result) {
      if (err) {
        response.status(400).json({ error: err.message });
        return;
      }
      console.log("RESULTS: ", result);
      response.json({
        message: "success",
        data,
      });
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: err.message,
    });
  }
});

router.get("/", async (request, response) => {
  try {
    var sql = "select * from user";
    var params = [];
    db.all(sql, params, (err, rows) => {
      if (err) {
        response.status(400).json({ error: err.message });
        return;
      }
      response.json({
        message: "success",
        data: rows,
      });
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: err.message,
    });
  }
});

router.delete("/:username", (request, response, next) => {
  const name = request.params.username;
  db.run("DELETE FROM user WHERE name = ?", name, function (err, result) {
    if (err) {
      response.status(400).json({ error: response.message });
      return;
    }
    response.json({ message: `deleted ${name}` });
  });
});

module.exports = router;
