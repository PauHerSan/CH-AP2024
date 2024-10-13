const nombres =["elías","Nora","shuri","Jeremi"];

//count += 1, suma uno al valor de la varieble y lo reasigna a la misma variable

let count = 0;
/*while(count < nombres.length){
    console.log(nombres[count]);
    count ++;
}*/

while(true){
 if(nombres[count].length >= 6){
    break;
 } else if(nombres[count].length < 3){
    continue;
 } else{
    console.log(nombres[count]);
 }
 count ++;

}