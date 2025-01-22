const express = require("express");
const router = express.Router();
const invoice = require("../models/invoice.js");

router.patch("/:invoiceId", async (req, res) => {
  try {
    const updated = await invoice.updateOne(
      {
        _id: req.params.invoiceId,
      },
      {
        sellerName: req.body.sellerName,
        sellerAddress: req.body.sellerAddress,
        customerName: req.body.customerName,
        customerAddress: req.body.customerAddress,
        items: req.body.items,
        finalPrice: req.body.finalPrice,
        terms: req.body.terms,
        invoiceDescription: req.body.invoiceDescription,
      }
    );
    console.log("Invouce updated successfully");
    res.status(200).json({ message: "Invoice updated" });
  } catch (err) {
    console.log("Invoice could not be updated");
    res.satus(500).json("Invoice could not be updated");
  }
});

module.exports = router;
