const express = require("express");
const router = express.Router();
const invoiceModel = require("../models/invoice.js");

router.get("/all", async (req, res) => {
  try {
    const docs = await invoiceModel.find();
    res.status(200).json(docs);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Information could not be read" });
  }
});

router.get("/:invoiceNumber", async (req, res) => {
  try {
    const doc = await invoiceModel.findOne({ _id: req.params.invoiceNumber });
    res.status(200).json(doc);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Inovice could not be found" });
  }
});

module.exports = router;
