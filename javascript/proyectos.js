fetch('../javascript/proyectos.json')
  .then(res => res.json())
  .then(proyectos => {
    const contenedor = document.querySelector('#contenedor')
    contenedor.innerHTML = proyectos.map(p =>
      `<div>
            <h3> ${p.proyecto} </h3>
            <p><strong>Cliente:</strong> ${p.cliente ?? 'N/A'}</p>
            <p><strong>Fecha:</strong> ${p.fecha}</p>
          </div>`).join('');
  })
  .catch(err => console.error('Error cargando Proyectos:', err));



