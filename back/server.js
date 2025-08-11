import express from 'express';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import cors from 'cors';
import dotenv from 'dotenv';
import { clientesEndpoints } from './endpoints/clientes.js';
import { animalesEndpoints } from './endpoints/animales.js';
import { medicamentosEndpoints } from './endpoints/medicamentos.js';
import { visitasEndpoints } from './endpoints/visitas.js';
import { clientesCSVEndpoints } from './CSV/clientesCSV.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let db;

async function conectarDB() {
  try {
    db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });
    console.log('✅ Conectado a MySQL');
  } catch (error) {
    console.error('❌ Error al conectar a MySQL:', error);
    process.exit(1);
  }
}

// Endpoint login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await db.query('SELECT * FROM usuarios WHERE username = ?', [username]);

    if (rows.length === 0) {
      return res.status(401).json({ mensaje: 'Usuario no encontrado' });
    }

    const usuario = rows[0];
    const passwordValida = await bcrypt.compare(password, usuario.password);

    if (!passwordValida) {
      return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
    }

    res.json({ mensaje: 'Login exitoso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
});

async function startServer() {
  await conectarDB();
  
  clientesEndpoints(app, db);
  animalesEndpoints(app, db);
  medicamentosEndpoints(app, db);
  visitasEndpoints(app, db);
  clientesCSVEndpoints(app, db);
  
  app.listen(PORT, () => {
    console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
  });
}

startServer();
