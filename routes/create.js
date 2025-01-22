const express = require("express");
const router = express.Router();
const invoice = require("../models/invoice.js");

router.post("/", async (req, res) => {
  const input = req.body;

  // Crear un nuevo documento de factura
  const newDoc = new invoice({
    sellerName: input.sellerName,
    sellerAddress: input.sellerAddress,
    customerName: input.customerName,
    customerAddress: input.customerAddress,
    items: input.items,
    finalPrice: input.finalPrice,
    terms: input.terms,
    invoiceDescription: input.invoiceDescription,
  });

  console.log("Documento a guardar:", newDoc); // Agrega este log

  try {
    // Guardar el documento de forma asincrónica
    const saveDoc = await newDoc.save();
    console.log("Documento guardado en la base de datos:", saveDoc); // Log de éxito

    console.log("Factura Guardada");
    res.status(200).json({ message: "Información guardada correctamente" });
  } catch (err) {
    console.log("ERROR " + err);
    res.status(500).json({ message: "No se pudo guardar la factura" });
  }
});

module.exports = router;
