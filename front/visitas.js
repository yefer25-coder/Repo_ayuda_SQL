const API_VISITAS = "http://localhost:3000/visitas";
const API_ANIMALES = "http://localhost:3000/animales";
const API_MEDICAMENTOS = "http://localhost:3000/medicamentos";

const visitaForm = document.getElementById("visitaForm");
const visitasTable = document.getElementById("visitasTable");

const visitaId = document.getElementById("visitaId");
const id_animal = document.getElementById("id_animal");
const id_medicamento = document.getElementById("id_medicamento");
const fecha = document.getElementById("fecha");
const observaciones = document.getElementById("observaciones");

// Cargar animales
async function cargarAnimales() {
  const res = await fetch(API_ANIMALES);
  const animales = await res.json();
  id_animal.innerHTML = "";
  animales.forEach(a => {
    id_animal.innerHTML += `<option value="${a.id_animal}">${a.nombre}</option>`;
  });
}

// Cargar medicamentos
async function cargarMedicamentos() {
  const res = await fetch(API_MEDICAMENTOS);
  const meds = await res.json();
  id_medicamento.innerHTML = "";
  meds.forEach(m => {
    id_medicamento.innerHTML += `<option value="${m.id_medicamento}">${m.nombre}</option>`;
  });
}

// Cargar visitas
async function cargarVisitas() {
  const res = await fetch(API_VISITAS);
  const visitas = await res.json();
  visitasTable.innerHTML = "";
  visitas.forEach(v => {
    visitasTable.innerHTML += `
      <tr>
        <td>${v.id_visita}</td>
        <td>${v.animal_nombre}</td>
        <td>${v.medicamento_nombre}</td>
        <td>${v.fecha}</td>
        <td>${v.observaciones || ''}</td>
        <td>
          <button onclick="editarVisita(${v.id_visita}, ${v.id_animal}, ${v.id_medicamento}, '${v.fecha}', '${v.observaciones || ''}')">Editar</button>
          <button onclick="eliminarVisita(${v.id_visita})">Eliminar</button>
        </td>
      </tr>
    `;
  });
}

// Guardar visita
visitaForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    id_animal: id_animal.value,
    id_medicamento: id_medicamento.value,
    fecha: fecha.value,
    observaciones: observaciones.value
  };

  if (visitaId.value) {
    await fetch(`${API_VISITAS}/${visitaId.value}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  } else {
    await fetch(API_VISITAS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  }

  visitaForm.reset();
  visitaId.value = "";
  cargarVisitas();
});

// Editar visita
function editarVisita(id, animal, medicamento, fec, obs) {
  visitaId.value = id;
  id_animal.value = animal;
  id_medicamento.value = medicamento;
  fecha.value = fec;
  observaciones.value = obs;
}

// Eliminar visita
async function eliminarVisita(id) {
  if (confirm("¿Seguro que quieres eliminar esta visita?")) {
    await fetch(`${API_VISITAS}/${id}`, { method: "DELETE" });
    cargarVisitas();
  }
}

// Inicial
cargarAnimales();
cargarMedicamentos();
cargarVisitas();
