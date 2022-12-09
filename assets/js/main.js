
const body = document.body
//tema
const btnTheme = document.getElementById("theme-btn")
//carrito
const cartBtnOpen = document.getElementById("cart-btn")
const cartBtnclose = document.getElementById("close-cart")
const cartContainer = document.getElementById("cart-container")
//menu

const menuBtnOpen =document.getElementById("menu-btn")
const menuBtnclose = document.getElementById("menu-close")
const menuContainer = document.getElementById("menu-container")


const darkThemeChange = () => {

  body.classList.toggle("dark")
  if(btnTheme.classList.contains("bx-moon")){
    btnTheme.classList.replace("bx-moon", "bx-sun")
  }else{
    btnTheme.classList.replace("bx-sun", "bx-moon")
  }
 }

  btnTheme.addEventListener( "click" ,() => darkThemeChange() )

//carrito btn
  cartBtnOpen.addEventListener("click",() => cartContainer.classList.remove("hide") )

 cartBtnclose.addEventListener("click",() => 
 cartContainer.classList.add("hide")

 )

 //menu btn

 menuBtnOpen.addEventListener("click",() => menuContainer.classList.remove("hide") )

 menuBtnclose.addEventListener("click",() => 
 menuContainer.classList.add("hide")
 )


 const nav = document.querySelector("nav")

window.addEventListener("scroll",() =>{
  if(scrollY >= 50){
    nav.classList.add("scroll-bg")
  }else{
    nav.classList.remove("scroll-bg")
  }
}) 








/*

  const main = document.querySelector("main")
      
  const shirtsContainer = document.createElement("section")
  main.prepend(shirtsContainer)

  const allShirts = document.createElement("section")
  allShirts.classList.add("shirts-all")

  shirtsContainer.appendChild(allShirts)




function createShirts(store){
  

  const container = document.createElement("article")
  container.classList.add("element")
  container.classList.add(store.category)
  container.classList.add("container-shirts")

  const imagen = document.createElement("img")
  imagen.src = store.image


  const infoPrice = document.createElement("div")
  infoPrice.classList.add("precio")

  const iconPlus = document.createElement("div")
  iconPlus.classList.add("plus")

  const buttomAdd = document.createElement("i")
  buttomAdd.classList.add("bx")
  buttomAdd.classList.add("bx-plus")
  buttomAdd.classList.add("bx-sm")

  const price = document.createElement("h2")
  price.textContent = `$${store.price}.00`

  const cantidad = document.createElement("span")
  cantidad.textContent = `stock: ${store.quantity}`

  const typeShirt = document.createElement("h3")
  typeShirt.textContent = store.name

 
  allShirts.appendChild(container)


 

  container.appendChild(imagen)

  container.appendChild(infoPrice)

  infoPrice.appendChild(price)

  price.appendChild(cantidad)

  infoPrice.appendChild(iconPlus)
  iconPlus.appendChild(buttomAdd)
  
  infoPrice.appendChild(typeShirt)

}

  /*
  cantidad.appendChild(iconPlus)



mixitup(".shirts-all", {
  selectors:{
    target:'.element'
  },
  animation: {
    duration:300
  }
}).filter('all')
}

*/

