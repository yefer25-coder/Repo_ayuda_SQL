import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

async function crearUsuario() {
  const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  const username = 'admin';
  const passwordPlano = '123456';
  const saltRounds = 10;

  const passwordHasheada = await bcrypt.hash(passwordPlano, saltRounds);

  await db.query('INSERT INTO usuarios (username, password) VALUES (?, ?)', [username, passwordHasheada]);

  console.log('Usuario admin creado');
  await db.end();
}

crearUsuario();
