
let PorPago = prompt("Ingresa lo pagado");

const Descuento = function(PorPago){
    if(PorPago <= 200){
        return "Sin descuento, pagar " + PorPago + " pesos"
    }
    else if(PorPago > 200 && PorPago <= 500){
        return "El descuento obtenido es del 10%, así que pagarás " + Math.round(PorPago*0.90) + " pesos";
    }
    else if(PorPago > 500 && PorPago <=1000){
        return "El descuento obtenido es del 20%, así que pagarás " + Math.round(PorPago*0.80) + " pesos";
    }  
    else if(PorPago > 1000){
        return "El descuento obtenido es del 30%, así que pagarás " + Math.round(PorPago*0.70) + " pesos"; 
    }      

    return "El descuento máximo ha sido concedido"
    
}

console.log("")