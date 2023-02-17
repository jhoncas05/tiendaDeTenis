//pasos para ver porno online

//1. controlando el contenido

let etiquetaTitulo=document.getElementById("titulo")
//1.1 manipulando el texto de la etiqueta (elemento)
etiquetaTitulo.textContent="jefe regalame 5 lukitas pal metro"

//1.2 manipulando el src
let etiquetaImagen=document.getElementById("imagen")
etiquetaImagen.src="https://data.whicdn.com/images/333837940/original.jpg"

//2. controlando el diseño
let etiquetaParrafo=document.getElementById("parrafo")
etiquetaParrafo.textContent="Cuando yo tenía seis años vi en un libro sobre la selva virgen que se titulaba Historias vividas, una magnífica lámina. Representaba una serpiente boa que se tragaba a una fiera. En el libro se afirmaba: La serpiente boa se traga su presa entera, sin masticarla. Luego ya no puede moverse y duerme durante los seis meses que dura su digestión. Reflexioné mucho en ese momento sobre las aventuras de la jungla y a mi vez logré trazar con un lápiz de colores mi primer dibujo. Mi dibujo número 1 era de esta manera: Enseñé mi obra de arte a las personas mayores y les pregunté si mi dibujo les daba miedo. -¿por qué habría de asustar un sombrero?— me respondieron. Mi dibujo no representaba un sombrero. Representaba una serpiente boa que digiere un elefante. Dibujé entonces el interior de la serpiente boa a fin de que las personas mayores pudieran comprender. Siempre estas personas tienen necesidad de explicaciones. Mi dibujo número 2 era así: Las personas mayores me aconsejaron abandonar el dibujo de serpientes boas, ya fueran abiertas o cerradas, y poner más interés en la geografía, la historia, el cálculo y la gramática. De esta manera a la edad de seis años abandoné una magnífica carrera de pintor. Había quedado desilusionado por el fracaso de mis dibujos número 1 y número 2. Las personas mayores nunca pueden comprender algo por sí solas y es muy aburrido para los niños tener que darles una y otra vez explicaciones"


//2.1 agregando un estilo (class)
//text-danger 
etiquetaParrafo.classList.add("text-info","fs-4","text-center")
etiquetaTitulo.classList.add("text-danger","fs-1","text-center")
etiquetaImagen.classList.add("d-block","mx-auto")

//2.2 quitar un estilo ()
etiquetaParrafo.classList.remove()