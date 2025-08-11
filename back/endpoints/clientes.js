export function clientesEndpoints(app, db) {
  app.get('/clientes', async (req, res) => {
    try {
      const [rows] = await db.query('SELECT * FROM clientes');
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al obtener clientes' });
    }
  });

  app.post('/clientes', async (req, res) => {
    const { nombre, telefono, direccion } = req.body;
    try {
      const [result] = await db.query(
        'INSERT INTO clientes (nombre, telefono, direccion) VALUES (?, ?, ?)',
        [nombre, telefono, direccion]
      );
      res.json({ id_cliente: result.insertId, nombre, telefono, direccion });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al crear cliente' });
    }
  });

  app.put('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, telefono, direccion } = req.body;
    try {
      await db.query(
        'UPDATE clientes SET nombre = ?, telefono = ?, direccion = ? WHERE id_cliente = ?',
        [nombre, telefono, direccion, id]
      );
      res.json({ mensaje: 'Cliente actualizado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al actualizar cliente' });
    }
  });

  app.delete('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await db.query('DELETE FROM clientes WHERE id_cliente = ?', [id]);
      res.json({ mensaje: 'Cliente eliminado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al eliminar cliente' });
    }
  });
}
