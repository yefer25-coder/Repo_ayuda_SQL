import multer from "multer";
import fs from "fs";
import csv from "csv-parser";

export function clientesCSVEndpoints(app, db) {
  const upload = multer({ dest: "uploads/" });

  // Subir y procesar CSV de clientes
  app.post("/clientes/upload-csv", upload.single("archivo"), (req, res) => {
    const filePath = req.file.path;
    const clientes = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => {
        // Se asume que el CSV tiene columnas: nombre, direccion, telefono
        clientes.push([row.nombre, row.direccion, row.telefono]);
      })
      .on("end", async () => {
        try {
          await db.query(
            "INSERT INTO clientes (nombre, direccion, telefono) VALUES ?",
            [clientes]
          );
          fs.unlinkSync(filePath); // eliminar archivo temporal
          res.json({ mensaje: "Clientes cargados correctamente", total: clientes.length });
        } catch (error) {
          console.error(error);
          res.status(500).json({ mensaje: "Error al insertar clientes" });
        }
      });
  });
}
