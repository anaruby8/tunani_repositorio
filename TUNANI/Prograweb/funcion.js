document.addEventListener("DOMContentLoaded", function() {
    const agregarRegistroBtn = document.getElementById("agregarRegistro");
    const cuerpoTabla = document.getElementById("cuerpoTabla");
  
    agregarRegistroBtn.addEventListener("click", function() {
      const nuevoRegistro = crearNuevoRegistro();
      cuerpoTabla.appendChild(nuevoRegistro);
    });
  
    function crearNuevoRegistro() {
      const tr = document.createElement("tr");
  
      const tdPaciente = document.createElement("td");
      const tdMedico = document.createElement("td");
      const tdProductos = document.createElement("td");
  
      const inputPaciente = document.createElement("input");
      inputPaciente.type = "text";
      const inputMedico = document.createElement("input");
      inputMedico.type = "text";
      const inputProductos = document.createElement("input");
      inputProductos.type = "text";
  
      tdPaciente.appendChild(inputPaciente);
      tdMedico.appendChild(inputMedico);
      tdProductos.appendChild(inputProductos);
  
      tr.appendChild(tdPaciente);
      tr.appendChild(tdMedico);
      tr.appendChild(tdProductos);
  
      return tr;
    }
  });
  