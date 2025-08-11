export function visitasEndpoints(app, db) {
  // Obtener todas las visitas con datos relacionados
  app.get('/visitas', async (req, res) => {
    try {
      const [rows] = await db.query(`
        SELECT v.*, 
               a.nombre AS animal_nombre, 
               m.nombre AS medicamento_nombre
        FROM visitas v
        JOIN animales a ON v.id_animal = a.id_animal
        JOIN medicamentos m ON v.id_medicamento = m.id_medicamento
        ORDER BY v.fecha DESC
      `);
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al obtener visitas' });
    }
  });

  // Crear visita
  app.post('/visitas', async (req, res) => {
    const { id_animal, id_medicamento, fecha, observaciones } = req.body;
    try {
      const [result] = await db.query(
        'INSERT INTO visitas (id_animal, id_medicamento, fecha, observaciones) VALUES (?, ?, ?, ?)',
        [id_animal, id_medicamento, fecha, observaciones]
      );
      res.json({ id_visita: result.insertId, id_animal, id_medicamento, fecha, observaciones });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al crear visita' });
    }
  });

  // Actualizar visita
  app.put('/visitas/:id', async (req, res) => {
    const { id } = req.params;
    const { id_animal, id_medicamento, fecha, observaciones } = req.body;
    try {
      await db.query(
        'UPDATE visitas SET id_animal=?, id_medicamento=?, fecha=?, observaciones=? WHERE id_visita=?',
        [id_animal, id_medicamento, fecha, observaciones, id]
      );
      res.json({ mensaje: 'Visita actualizada' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al actualizar visita' });
    }
  });

  // Eliminar visita
  app.delete('/visitas/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await db.query('DELETE FROM visitas WHERE id_visita = ?', [id]);
      res.json({ mensaje: 'Visita eliminada' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al eliminar visita' });
    }
  });
}
