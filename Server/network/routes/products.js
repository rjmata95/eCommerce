const express = require("express");
const router = express.Router();
const {
  storeData,
  retrieveData,
  updateData,
  removeData,
} = require("../../controllers/products");

router.get("/", (req, res) => {
  console.log("get endpoint");
  //   if (body.constructor === Object) res.status(400).send("Not valid body");
  //   else {
  retrieveData()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(502).send("Error during request");
    });
  //   }
});

router.post("/", (req, res) => {
  const { body } = req;
  console.log(body);
  if (body.constructor === Object && Object.keys(body).length === 0)
    res.status(400).send("Not valid body");
  else {
    storeData(body)
      .then((result) => {
        console.log(result);
        res.status(200).send(result);
      })
      .catch((error) => {
        console.log(error);
        res.status(502).send("Error during request");
      });
  }
});

router.patch("/:id", (req, res) => {
  const { body, params } = req;
  console.log(params);
  if (
    body.constructor === Object &&
    Object.keys(body).length === 0 &&
    params.id === null
  )
    res.status(400).send("Not valid body or ID");
  else {
    updateData(params.id, body)
      .then((result) => {
        console.log(result);
        res.status(200).send(result);
      })
      .catch((error) => {
        console.log(error);
        res.status(502).send("Error during request");
      });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  if (id === null) res.status(400).send("Not valid ID");
  else {
    removeData(id)
      .then((result) => {
        console.log(result);
        res.status(200).send(result);
      })
      .catch((error) => {
        console.log(error);
        res.status(502).send("Error during request");
      });
  }
});

module.exports = router;
