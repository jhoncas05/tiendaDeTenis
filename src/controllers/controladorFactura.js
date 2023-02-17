let carrito = JSON.parse(localStorage.getItem("carrito"))
let totalCompra=document.getElementById("totalCompra")

//traigo a factura

let factura = document.getElementById("factura")

//compruebo el estado del carrito de compras


let totalcalculado=0
let bandera = true

if(carrito == null){

    //poner el total en 0
    

    let fila = document.createElement("div")//creo la fila
    fila.classList.add("row","my-5","justify-content-center")
    
    let columna = document.createElement("div")//creo la columna
    columna.classList.add("col-12", "col-md-8")
    
    let imagen = document.createElement("img")//creo la imagen
    imagen.classList.add("img-fluid","w-100")
    imagen.src = "../../assets/img/cartempty.png"
    
    let mensaje = document.createElement("h2")
    mensaje.classList.add("text-center")
    mensaje.textContent = "Your cart is empty"

    columna.appendChild(imagen)
    columna.appendChild(mensaje)
    fila.appendChild(columna)
    factura.appendChild(fila)

}else{
    //recorro el carrito
    carrito.forEach(function(producto){


        let fila = document.createElement("div")
        fila.classList.add("row","my-5","justify-content-center","shadow","p-3")


        let columna2 = document.createElement("div")
        columna2.classList.add("col-12","col-md-8","align-self-center", "border-end")
        
        let columna3 = document.createElement("div")
        columna3.classList.add("col-12","col-md-4","align-self-center","fs-1","text-center")



        let foto = document.createElement("img")
        foto.classList.add("img-fluid","w-100")
        foto.src = producto.fotos

        let nombre = document.createElement("h2")
        nombre.classList.add("text-center","text-muted")
        nombre.textContent=producto.nombre

        let descripcion = document.createElement("h3")
        descripcion.classList.add("text-center","text-muted")
        descripcion.textContent=producto.descripcion

        let cantidad = document.createElement("h3")
        cantidad.classList.add("text-center", "text-muted")
        cantidad.textContent="Quantity: "+producto.cantidadProducto



        let precio = document.createElement("h3")
        precio.classList.add("text-center","text-muted","mt-5")
        precio.textContent="Single cost: "+producto.precio

        let subtotal=document.createElement("h2")
        subtotal.classList.add("fw-bold", "text-center","bg-dark", "text-white")
       
        let subtotalcalculado=producto.precio.split("$")[1]*producto.cantidadProducto

        totalcalculado=totalcalculado+subtotalcalculado

        console.log(subtotalcalculado)
        subtotal.textContent="$"+subtotalcalculado

        let textosubtotal=document.createElement ("h3")
        textosubtotal.classList.add("fw-bold", "text-center")
        textosubtotal.textContent="Subtotal"

        let btnlimpiar=document.getElementById("btnlimpiar")
        btnlimpiar.addEventListener("click",function(evento){
            //limpio el carrito de la memoria
            localStorage.removeItem("carrito")

            //recargar la pagina
            window.location.href="./resumenCompra.html"

            //poner el total en 0
            totalCompra.textContent="total: $0"

        })
        
        columna2.appendChild(foto)
        columna2.appendChild(nombre)
        columna2.appendChild(descripcion)
        columna2.appendChild(precio)
        columna2.appendChild(cantidad)
        columna3.appendChild(textosubtotal)
        columna3.appendChild(subtotal)
        fila.appendChild(columna2)
        fila.appendChild(columna3)
        factura.appendChild(fila)
    })

    

    let convertir=document.createElement("button")
    convertir.classList.add("btn", "btn-info")
    convertir.textContent = "Convertir a usd"

    convertir.addEventListener("click",function(){
        let usd = 4300
        let operacion = 0
        operacion =  totalcalculado / usd

        if(bandera==true){
            convertir.addEventListener("click",function(evento){
                total.textContent= "COP" +" "+ totalcalculado
                convertir.textContent= "convertir a USD"
            })
            bandera = !bandera
        }
        else{
            convertir.addEventListener("click",function(evento){
                total.textContent="USD"+" "+ operacion
                convertir.textContent= "convertir a COP"

            })
            bandera = !bandera
        }

    })

    
    

    let total=document.createElement("h2")
    total.classList.add("fw-bold", "text-center","bg-dark", "text-white")

    let textototal=document.createElement ("h3")
    textototal.classList.add("fw-bold", "text-center")
    textototal.textContent="Total"
    
    let fila2 = document.createElement("div")
    fila2.classList.add("row","my-5","justify-content-center","shadow","p-3")

    let columna4 = document.createElement("div")
    columna4.classList.add("col-8","col-md-8","align-self-center","fs-1","text-center")

    let columna5 = document.createElement("div")
    columna5.classList.add("col-4","col-md-4","align-self-center","fs-1","text-center")

    console.log(totalcalculado)
    total.textContent="COP"+" "+totalcalculado

    columna5.appendChild(convertir)
    columna4.appendChild(textototal)
    columna4.appendChild(total)
    fila2.appendChild(columna4)
    fila2.appendChild(columna5)
    factura.appendChild(fila2)
}