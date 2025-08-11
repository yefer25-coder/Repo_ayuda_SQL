const API_URL_ANIMALES = "http://localhost:3000/animales";
const API_URL_CLIENTES = "http://localhost:3000/clientes";

const formAnimal = document.getElementById("animalForm");
const animalesTable = document.getElementById("animalesTable");
const animalId = document.getElementById("animalId");
const nombre = document.getElementById("nombre");
const especie = document.getElementById("especie");
const raza = document.getElementById("raza");
const edad = document.getElementById("edad");
const id_cliente = document.getElementById("id_cliente");

// Cargar clientes en el select
async function cargarClientesSelect() {
  const res = await fetch(API_URL_CLIENTES);
  const clientes = await res.json();
  id_cliente.innerHTML = "";
  clientes.forEach(c => {
    id_cliente.innerHTML += `<option value="${c.id_cliente}">${c.nombre}</option>`;
  });
}

// Cargar animales
async function cargarAnimales() {
  const res = await fetch(API_URL_ANIMALES);
  const animales = await res.json();
  animalesTable.innerHTML = "";
  animales.forEach(a => {
    animalesTable.innerHTML += `
      <tr>
        <td>${a.id_animal}</td>
        <td>${a.nombre}</td>
        <td>${a.especie}</td>
        <td>${a.raza || ''}</td>
        <td>${a.edad || ''}</td>
        <td>${a.cliente_nombre}</td>
        <td>
          <button onclick="editarAnimal(${a.id_animal}, '${a.nombre}', '${a.especie}', '${a.raza || ''}', ${a.edad || 0}, ${a.id_cliente})">Editar</button>
          <button onclick="eliminarAnimal(${a.id_animal})">Eliminar</button>
        </td>
      </tr>
    `;
  });
}

// Guardar animal
formAnimal.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    nombre: nombre.value,
    especie: especie.value,
    raza: raza.value,
    edad: edad.value,
    id_cliente: id_cliente.value
  };

  if (animalId.value) {
    await fetch(`${API_URL_ANIMALES}/${animalId.value}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  } else {
    await fetch(API_URL_ANIMALES, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  }

  formAnimal.reset();
  animalId.value = "";
  cargarAnimales();
});

// Editar animal
function editarAnimal(id, nom, esp, rz, ed, idCli) {
  animalId.value = id;
  nombre.value = nom;
  especie.value = esp;
  raza.value = rz;
  edad.value = ed;
  id_cliente.value = idCli;
}

// Eliminar animal
async function eliminarAnimal(id) {
  if (confirm("¿Seguro que quieres eliminar este animal?")) {
    await fetch(`${API_URL_ANIMALES}/${id}`, { method: "DELETE" });
    cargarAnimales();
  }
}

// Inicial
cargarClientesSelect();
cargarAnimales();
