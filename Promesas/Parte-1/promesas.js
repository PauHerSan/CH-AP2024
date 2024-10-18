const WaitNSeconds = (milisenconds) =>{
    return new Promise((resolve, reject) => {
        //iniciamos el timeout//
        setTimeout( () =>{
            const success = true;
            if(success){
                resolve("La petición fue exitosa");
            } else{
                reject("La petición fallo");
            }
        },milisenconds)
    })
}
console.log("Voy después de la función wait");

WaitNSeconds(2000).then(function(res){
    console.log(res);
}).catch((error) => {
    console.log(error);
})