


const sectionShop = document.getElementById("store-shrits")

  

  

items.forEach((producto) =>{
  const articleShop = document.createElement("article")
  articleShop.classList.add("element")
  articleShop.classList.add(producto.category)
  articleShop.classList.add("container-shirts")

  articleShop.innerHTML = `
  <img src='assets/images/featured1.png' alt="">

  <div class="precio">

  <h2>14.00 <span> stock: 10</span></h2>

  <div class="plus">

  <i class="bx bx-plus bx-sm"></i>

  </div>

  <h3> Hoodies  </h3>

  </div>
  
  `
  sectionShop.appendChild(articleShop)

} )
const items = [
  {
    id: 1,
    name: 'Hoodies',
    price: 14.00,
    image: 'assets/images/featured1.png',
    category: 'hoodies',
    quantity: 10
  },
  {
    id: 2,
    name: 'Shirts',
    price: 24.00,
    image: 'assets/images/featured2.png',
    category: 'shirts',
    quantity: 15
  },
  {
    id: 3,
    name: 'Sweatshirts',
    price: 24.00,
    image: 'assets/images/featured3.png',
    category: 'sweatshirts',
    quantity: 20
  }
]
