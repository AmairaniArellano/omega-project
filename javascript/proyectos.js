fetch('../javascript/proyectos.json')
  .then(res => res.json())
  .then(proyectos => {
    const contenedor = document.querySelector('#contenedor')
    contenedor.innerHTML = proyectos.map((p, i) =>
      `<div class="timeline-item ${i % 2 ? 'reverse' : ''}">
          <div class="timeline-img">
            <img src="${p.imagen ?? ''}" alt="${p.descripcion}">
          </div>
          <div class="timeline-text">
          <p>${p.descripcion}</p>
          <p><strong>Cliente:<br></strong> ${p.cliente ?? 'Particular'}</p>
          <h3>${p.fecha}</h3>
          </div>
        </div>`
    ).join('');
  })
  .catch(err => console.error('Error cargando Proyectos:', err));




