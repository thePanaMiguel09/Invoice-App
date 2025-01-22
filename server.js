//Dependecias
const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");

//Conexion a la base de datos
mongoose.connect(
  "mongodb+srv://miguichavezbarreram:s3xsU0q93mwwS2Gk@apiinvoices.psry1.mongodb.net/invoicesContainer?retryWrites=true&w=majority&appName=invoicesContainer"
);

mongoose.connection.on("error", (error ) => {
  console.log(error);
});

mongoose.connection.on("connected", () => {
  console.log(`Conectado a la base de datos: ${mongoose.connection.name}`);
});


mongoose.connection.once("open", () => {
  console.log(`Conectado a la base de datos: ${mongoose.connection.name}`);
});

app.use(express.json());

//Servidor estatico
app.use(express.static(path.join(__dirname, "dist")));

app.use("/api/createInvoice", require("./routes/create.js"));

app.use("/api/readinvoice", require("./routes/read.js"));

app.use("/api/updateinvoice", require("./routes/update.js"));

app.use("/api/deleteinvoice", require("./routes/delete.js"));

app.get("*", (req, res) => {
  res.sendFile(path.join(
    __dirname, 'dist/invoiceGenerator.html'
  ));
});

app.listen(3000, () => {
  console.log(`Server listening on port ${3000}`);
});
