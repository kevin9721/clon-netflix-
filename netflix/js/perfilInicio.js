document.addEventListener("DOMContentLoaded", () => {
	const navBar = document.querySelector('.container');
	const fila = document.querySelector('.contenedor-carousel');
	const peliculas = document.querySelectorAll('.pelicula');
	const contenedor = document.querySelector('.contenedor');
	const flechaIzquierda = document.getElementById('flecha-izquierda');
	const flechaDerecha = document.getElementById('flecha-derecha');
	const abrirModal = document.querySelector('.botones-der');
	const contenedorPrincipal = document.querySelector('.contenedor-principal');
	const cerrarModal = document.getElementById("closeModalBtn")
	let peliculaConHover = null;

		// ----- ----- Event para cambio a negro. ----- -----

	window.addEventListener('scroll', () => {
		if (window.scrollY > 0) {
			navBar.style.backgroundColor = 'black';
		} else {
			navBar.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
		}
	});



	// ----- ----- Event Listener para la flecha derecha. ----- -----

	flechaDerecha.addEventListener('click', () => {
		contenedor.style.width = '100%';

		fila.scrollLeft += fila.offsetWidth;

		const indicadorActivo = document.querySelector('.indicadores .activo');
		if (indicadorActivo.nextSibling) {
			indicadorActivo.nextSibling.classList.add('activo1');
			indicadorActivo.classList.remove('activo1');
		}
	});

	
	contenedorPrincipal.addEventListener('mouseenter', () => {
		flechaIzquierda.style.display = 'block';
		flechaDerecha.style.display = 'block';
	});

	contenedorPrincipal.addEventListener('mouseleave', () => {
		flechaIzquierda.style.display = 'none';
		flechaDerecha.style.display = 'none';

	});


	//  ----- ----- Event Listener para la flecha izquierda. ----- -----
	flechaIzquierda.addEventListener('click', () => {
		contenedor.style.width = '100%';
		indicadorActivo.classList.toggle('activo1');

		fila.scrollLeft -= fila.offsetWidth;

		const indicadorActivo = document.querySelector('.indicadores .activo');
		if (indicadorActivo.previousSibling) {
			indicadorActivo.previousSibling.classList.add('activo');
			indicadorActivo.classList.remove('activo');
		}
	});

	// ----- ----- Paginacion ----- -----
	const numeroPaginas = Math.ceil(peliculas.length / 5);
	for (let i = 0; i < numeroPaginas; i++) {
		const indicador = document.createElement('button');

		if (i === 0) {
			indicador.classList.add('activo');
			
		}

		document.querySelector('.indicadores').appendChild(indicador);
		indicador.addEventListener('click', (e) => {
			fila.scrollLeft = i * fila.offsetWidth;
			contenedor.style.width = '100%';

			document.querySelector('.indicadores .activo').classList.remove('activo');
			e.target.classList.add('activo');
		});
	}

	// ----- ----- Hover ----- -----
	
	peliculas.forEach((pelicula) => {
		pelicula.addEventListener('mouseenter', (e) => {
		  if (peliculaConHover) {
			peliculaConHover.querySelector('.botones').classList.remove("boton-derecha1");
		  }
		  
		  peliculaConHover = pelicula;
	  
		  const reproducirBtn = pelicula.querySelector('.botones');
		  reproducirBtn.classList.add("boton-derecha1");
	  
		  setTimeout(() => {
			peliculas.forEach(p => p.classList.remove('hover'));
			pelicula.classList.add('hover');
		  }, 100);
		});
	  
		pelicula.addEventListener('mouseleave', () => {
		  const reproducirBtn = pelicula.querySelector('.botones');
		  reproducirBtn.classList.remove("boton-derecha1");
		});
	  });

	  contenedorPrincipal.addEventListener('mouseleave', () => {
		if (peliculaConHover) {
		  peliculaConHover.querySelector('.botones').classList.remove("boton-derecha1");
		  peliculaConHover.classList.remove('hover');
		  peliculaConHover = null;
		}
	  });

	fila.addEventListener('mouseleave', () => {
		peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
	});

	peliculas.forEach((pelicula) => {
		pelicula.addEventListener('mouseenter', () => {
			pelicula.querySelector('.detalles-pelicula').style.display = 'flex';
		});

		pelicula.addEventListener('mouseleave', () => {
			pelicula.querySelector('.detalles-pelicula').style.display = 'none';
		});
	});

		// ----- ----- Event Listener para la ventana modal. ----- -----

	abrirModal.addEventListener("click", ()=> {
		document.getElementById("myModal").style.display = "block";
	});
	
cerrarModal.addEventListener("click", function() {
		document.getElementById("myModal").style.display = "none";
	});
})

const reproducirBtn = document.querySelector(".start-btn");

reproducirBtn.addEventListener("click", () => {
   window.location.href="reproductor.html";
  });

