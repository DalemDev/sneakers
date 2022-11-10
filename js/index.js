const imagen = document.querySelector('.producto')
const anteriorImg = document.querySelector('.anterior-img')
const siguienteImg = document.querySelector('.siguiente-img')
imagen.src = "./images/image-product-1.jpg"

const productosAn = [  
  "./images/image-product-4.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-1.jpg"
]
const productosSi = [  
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
  "./images/image-product-1.jpg"
]

let validarAnterior = 0
anteriorImg.addEventListener('click', () => {  
  imagen.src = productosAn[validarAnterior]
  validarAnterior++ 

  if(validarAnterior === 4){
    validarAnterior = 0
  }
  
})

let validarSiguiente = 0
siguienteImg.addEventListener('click', () => {
  imagen.src = productosSi[validarSiguiente]
  validarSiguiente++ 

  if(validarSiguiente === 4){
    validarSiguiente = 0
  }
})

const hamburguer = document.querySelector('.hamburguer')

hamburguer.addEventListener('click', () => {
  const navbar = document.querySelector('.navbar')
  navbar.style.transform = "translateX(0)"
})

const close = document.querySelector('.close')
close.addEventListener('click', () => {
  const navbar = document.querySelector('.navbar')
  navbar.style.transform = "translateX(-1000px)"
})

const quitar = document.querySelector('.quitar')
const agregar = document.querySelector('.agregar')

quitar.addEventListener('click', () => {
  const cantidad = document.querySelector('.cantidad-llevar')
  if(parseInt(cantidad.textContent,10) !== 0){
    cantidad.textContent = parseInt(cantidad.textContent,10)-1
  }
})
agregar.addEventListener('click', () => {
  const cantidad = document.querySelector('.cantidad-llevar')
  if(parseInt(cantidad.textContent,10) === 0){
    cantidad.textContent = 1
  }else{
    cantidad.textContent = parseInt(cantidad.textContent,10)+1
  }
})

const agregarCarrito = document.querySelector('.agregar-carro')

agregarCarrito.addEventListener('click', () => {
  const cantidad = document.querySelector('.cantidad-llevar').textContent
  if(cantidad !== 0){
    const contenedor = document.querySelector('.lista')
    contenedor.textContent = cantidad
    contenedor.style.transform="scale(1)"    
  }
})