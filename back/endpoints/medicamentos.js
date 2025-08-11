export function medicamentosEndpoints(app, db) {
  // Obtener todos los medicamentos
  app.get('/medicamentos', async (req, res) => {
    try {
      const [rows] = await db.query('SELECT * FROM medicamentos');
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al obtener medicamentos' });
    }
  });

  // Crear medicamento
  app.post('/medicamentos', async (req, res) => {
    const { nombre, descripcion, stock } = req.body;
    try {
      const [result] = await db.query(
        'INSERT INTO medicamentos (nombre, descripcion, stock) VALUES (?, ?, ?)',
        [nombre, descripcion, stock]
      );
      res.json({ id_medicamento: result.insertId, nombre, descripcion, stock });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al crear medicamento' });
    }
  });

  // Actualizar medicamento
  app.put('/medicamentos/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, stock } = req.body;
    try {
      await db.query(
        'UPDATE medicamentos SET nombre = ?, descripcion = ?, stock = ? WHERE id_medicamento = ?',
        [nombre, descripcion, stock, id]
      );
      res.json({ mensaje: 'Medicamento actualizado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al actualizar medicamento' });
    }
  });

  // Eliminar medicamento
  app.delete('/medicamentos/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await db.query('DELETE FROM medicamentos WHERE id_medicamento = ?', [id]);
      res.json({ mensaje: 'Medicamento eliminado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al eliminar medicamento' });
    }
  });
}
