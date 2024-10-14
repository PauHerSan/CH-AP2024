/*console.log("User profile");

const nombreUsuario = prompt("Ingresa tu nombre de usuario");
const EdadUsuario = prompt("¿Cuál es tu edad?");
const Lasfavs = prompt("Nombra cinco películas favoritas (separadas por comas):");

const listaDeFavs = Lasfavs.split(',');
const peliculasLimpias = listaDeFavs.map(pelicula => pelicula.trim());
console.log("Tu nombre de usuario es " + nombreUsuario + ", tu edad es " + EdadUsuario + " y tus películas favoritas son:");
peliculasLimpias.forEach(pelicula => {
    console.log("*" + pelicula);
});*/

/* películas de prueba : el sueño de wadja, interstellar, el príncipe de egipto, locamente millonarios, quisiera ser millonario*/

/*console.log("Número mayor");

function ElnumeroMAYOR(){
    let numeros = [];
    for (let i = 0; i < 10; i++) {
      let numero = prompt("Ingrese el número " + (i + 1) + ":");
      numeros.push(numero);
    }
    let numeroMayor = Math.max(...numeros);
  
    console.log("El número mayor es:", numeroMayor);
}
  
 ElnumeroMAYOR();*/

/*Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). 
Figure out if the sentence/word is a palindrome or not.  spaces and capitalized letters.
1. String o entrada
2. Definir qué es un palíndromo:Palabra o frase cuyas letras están dispuestas de tal manera que resulta la misma leída de izquierda a derecha que de derecha a izquierda; por ejemplo, anilina; dábale arroz a la zorra el abad.
3. Guardar la entrada en una variable
4. Normalizar la palabra o frase, asiendo todo en minúsculas y quitando espacios
  4.1 Guardar una copia de la palabra o frase original normalizada.
5. Convertir la palabra o frase a un array
6. Revertir el array
7. Convertir el array de nuevo en frase o palabra y guardarlo en una variable
8. Salida una frase que indique si la entrada del usuario es o no un palídromo
*/

const isPalindrome = () => {
    const String = prompt("Ingresa una palabra o frase, para verificar si es palíndromo");
    const strNormalized = String.toLocaleLowerCase().replaceAll(" ","");
    const strArray = strNormalized.split(" ");
    const strNormReversed = strArray.reverse().join("");
    if(strNormalized == strNormReversed){
      console.log("Tus palabras son limpias, claras y palíndromas (●'◡'●)");
    }else{
      console.log("No son palíndromas F (┬┬﹏┬┬)");
    }

} 

isPalindrome();