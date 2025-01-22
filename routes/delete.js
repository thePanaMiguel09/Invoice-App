const express = require("express");
const router = express.Router();
const invoice = require('../models/invoice.js')


router.delete("/:invoiceNumber", async (req, res) => {
  
  try{
    const invoiceDeleted = await invoice.deleteOne({
      _id: req.params.invoiceNumber
    })
    console.log('Invoice deleted')
    res.status(200).json({message: 'Invoice deleted'})

  } catch(err){
    console.log('Invoice could not be deleted '+ err)
    res.status(500).json({message: 'Invoice could not be deleted'})
  }
  
});

module.exports = router
