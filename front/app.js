const API_URL = "http://localhost:3000/clientes";
const form = document.getElementById("clienteForm");
const clientesTable = document.getElementById("clientesTable");
const clienteId = document.getElementById("clienteId");
const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const direccion = document.getElementById("direccion");

// Cargar clientes al inicio
async function cargarClientes() {
  const res = await fetch(API_URL);
  const clientes = await res.json();
  clientesTable.innerHTML = "";
  clientes.forEach(c => {
    clientesTable.innerHTML += `
      <tr>
        <td>${c.id_cliente}</td>
        <td>${c.nombre}</td>
        <td>${c.telefono}</td>
        <td>${c.direccion}</td>
        <td class="actions">
          <button onclick="editarCliente(${c.id_cliente}, '${c.nombre}', '${c.telefono}', '${c.direccion}')">Editar</button>
          <button onclick="eliminarCliente(${c.id_cliente})">Eliminar</button>
        </td>
      </tr>
    `;
  });
}

// Guardar cliente
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    nombre: nombre.value,
    telefono: telefono.value,
    direccion: direccion.value
  };

  if (clienteId.value) {
    // Actualizar
    await fetch(`${API_URL}/${clienteId.value}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  } else {
    // Crear
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  }

  form.reset();
  clienteId.value = "";
  cargarClientes();
});

// Editar cliente
function editarCliente(id, nom, tel, dir) {
  clienteId.value = id;
  nombre.value = nom;
  telefono.value = tel;
  direccion.value = dir;
}

// Eliminar cliente
async function eliminarCliente(id) {
  if (confirm("¿Seguro que quieres eliminar este cliente?")) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    cargarClientes();
  }
}

// Inicial
cargarClientes();
