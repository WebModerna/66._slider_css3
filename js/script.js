// Dar vida al slider
window.addEventListener("load", iniciadora);

function iniciadora()
{
	// El arreglo con cada uno de los sliders.

	const sliders = document.querySelectorAll(".animacion__carrousel");

	// Función que se autoejecuta cada 3 segundos
	let i = 0;
	function temporizadorInfinito()
	{
		setTimeout(temporizadorInfinito, 4000);
		izq();

		// Control del contador
		i = ( i + 1 ) % sliders.length;
		der();
	}
	temporizadorInfinito();
	
	// Desplazamiento hacia la izquierda y desaparece
	function izq()
	{
		sliders[i].classList.add("slideOutLeft");
		sliders[i].classList.remove("slideInRight");
	}

	// Desplazamiento desde la derecha y se queda en el centro 
	function der()
	{
		sliders[i].classList.add("slideInRight");
		sliders[i].classList.remove("slideOutLeft");
	}
}