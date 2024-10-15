const Tarjeta1 = document.getElementById("Tarjeta-1");
const BotTarUno = document.getElementById("BTUno");


//querySelector, selecciona con base en un selector en css//
//console.log(BotTarUno) <- se puede ver elemento elegido de html en la consola// 
//classList permite agregar o eliminar una clase, en este caso en la tarjeta uno se aplica el color deseado//
Tarjeta1.classList.add("bg-info")

//className: podemos ver que se da preferencia sobre las clases que tenemos en el elementos//
//Tarjeta1.className += "bg-danger";//

BotTarUno.addEventListener("click",()=> {
    const h5Tittle = document.querySelector(".card-title");
    h5Tittle.classList.toggle("hidden");
});
