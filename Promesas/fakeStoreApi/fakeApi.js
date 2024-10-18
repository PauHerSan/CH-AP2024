const URL_BASE = "https://fakestoreapi.com/products";

const showAllProducts = function(productsArray){
    
    if(productsArray.length >0) return;
    if(!productsArray) return; //guard clause early return su objetivo es evaluar el caso de error donde ya no vamos a hacer nada//
    const cardProduct =`
    <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
      </ul>
      
    </div>
    `

}
//Función declaración async

async function getAllProductos(){
   try {
    const response = await fetch(URL_BASE);
    if(!response) throw new Error("Error al obtener los productos");
    const data = await response.json();
    console.log(data);
   } catch (error){
    console.log("Error", error);
   }
}

//función expresión async//

const getSingleProduct = async function(id){
    try {
        const response = await fetch(`${URL_BASE}/${id}`);
        if(!response) throw new Error("Error al obtener los productos");
        const data = await response.json();
        console.log(data);
       } catch (error){
        console.log("Error", error);
       }
}

//Arrow function async//
const addProduct = async (productObject)=>{
    const response = await fetch(URL_BASE,{
       method: "POST",
       body: JSON.stringify(productObject)      
    });
    const data = await response.json();
    console.log(data);  
}



getAllProductos();
