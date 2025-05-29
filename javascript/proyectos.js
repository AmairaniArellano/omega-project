fetch('../javascript/proyectos.json')
  .then(res => res.json())
  .then(proyectos => {
    const contenedor = document.querySelector('#contenedor')
    contenedor.innerHTML = proyectos.map((p, i) =>
      `<div class="timeline-item ${i % 2 ? 'reverse' : ''}">
          <div class="timeline-img">
            <img src="${p.imagen ?? ''}" alt="${p.proyecto}">
          </div>
          <div class="timeline-text">
            <h3>${p.fecha}</h3>
            <p>${p.proyecto}</p>
            <p><strong>Cliente:<br></strong> ${p.cliente ?? 'Reservado'}</p>
          </div>
        </div>`
    ).join('');
  })
  .catch(err => console.error('Error cargando Proyectos:', err));




/* fetch('../javascript/proyectos.json')
  .then(res => res.json())
  .then(proyectos => {
    const contenedor = document.querySelector('#contenedor')
    contenedor.innerHTML = proyectos.map(p =>
      `<div>
            <img src="${p.imagen ?? 'N/A'}" alt="">
            <h3> ${p.proyecto} </h3>
            <p><strong>Cliente:</strong> ${p.cliente ?? 'N/A'}</p>
            <p><strong>Fecha:</strong> ${p.fecha}</p>
          </div>`).join('');
  })
  .catch(err => console.error('Error cargando Proyectos:', err)); */



