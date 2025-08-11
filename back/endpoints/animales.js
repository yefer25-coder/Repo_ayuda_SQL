export function animalesEndpoints(app, db) {
  // Obtener todos los animales
  app.get('/animales', async (req, res) => {
    try {
      const [rows] = await db.query(`
        SELECT a.*, c.nombre AS cliente_nombre
        FROM animales a
        JOIN clientes c ON a.id_cliente = c.id_cliente
      `);
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al obtener animales' });
    }
  });

  // Crear animal
  app.post('/animales', async (req, res) => {
    const { nombre, especie, raza, edad, id_cliente } = req.body;
    try {
      const [result] = await db.query(
        'INSERT INTO animales (nombre, especie, raza, edad, id_cliente) VALUES (?, ?, ?, ?, ?)',
        [nombre, especie, raza, edad, id_cliente]
      );
      res.json({ id_animal: result.insertId, nombre, especie, raza, edad, id_cliente });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al crear animal' });
    }
  });

  // Actualizar animal
  app.put('/animales/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, especie, raza, edad, id_cliente } = req.body;
    try {
      await db.query(
        'UPDATE animales SET nombre=?, especie=?, raza=?, edad=?, id_cliente=? WHERE id_animal=?',
        [nombre, especie, raza, edad, id_cliente, id]
      );
      res.json({ mensaje: 'Animal actualizado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al actualizar animal' });
    }
  });

  // Eliminar animal
  app.delete('/animales/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await db.query('DELETE FROM animales WHERE id_animal = ?', [id]);
      res.json({ mensaje: 'Animal eliminado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al eliminar animal' });
    }
  });
}
