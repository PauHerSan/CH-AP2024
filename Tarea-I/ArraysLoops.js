/*console.log("Suma de resistencias en serie");

const numdeRes = prompt("¿Cúantas resistencias vas a sumar?");
const ParaSuma = ValoresIngresados(numdeRes);

function ValoresIngresados(numdeRes){
    const valores = [];
    let sumaTotalRes =0;
    for(let i=0; i< numdeRes; i++){
      const valorRes = Math.abs(prompt(`Ingrese el valor de la resistencia ${i+1}`));
      if(valorRes > 1){
        valores.push(valorRes);
        sumaTotalRes += valorRes;
      } else{
        console.log("El valor de la resistencia ingresada es incorrecto, revise sus datos de nuevo.");
        i--;
      }
    }
    console.log("La suma total de las resistencias es:", sumaTotalRes);
    return valores;
  
}

console.log("Los valores de las resistencias ingresadas y valor absoluto son:", ParaSuma);*/



console.log("The Secret Society");

const numMiem = prompt("¿Cúantos miembros hay en el equipo?");
const OfficialName = MiembrosIngresados(numMiem);

function MiembrosIngresados(numMiem){
  const OfficialName =[]; 
  for(let i=0; i< numMiem; i++){
    const NomBres = prompt(`Ingrese el nombre del miembro ${i+1}`);
    if(NomBres.trim() !== " "){
      const iniciaL = NomBres.charAt(0);
      OfficialName.push(iniciaL);
    } else{
      console.log("Revise el nombre de nuevo.");
      i--;
    }
  }
  return OfficialName;
}
console.log("La sociedad secreta se llamará " + OfficialName);

//No supe hacer el de array of multiples D': //

