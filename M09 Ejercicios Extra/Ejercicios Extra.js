/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   //console.log(objeto);
   var Narray=[];
   for (var prop in objeto){
      var Mprop=(prop)
      var Mvalprop=(objeto[prop]);
      
      Narray.push([Mprop,Mvalprop]);
      
   }
  
   //console.log(Narray)
   return Narray
}

deObjetoAarray(x={D: 1, B: 2, C: 3})

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var Mnuevobj = {};
   var Narraynumber=[]
 
   for (var i=0; i<string.length; i++){
     Narraynumber[i]=string[i];
   }
 
   Narraynumber.sort();
   
   Mnuevobj = Narraynumber.reduce((prop, ocur) => ((prop[ocur] = prop[ocur] + 1 || 1), prop), {});
   return Mnuevobj
 }
 numberOfCharacters("adsjfdsfsfjsdjxfhacabcsbajdaz")

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
 var NarrayToFront = [];
  var Mtexto = string;
  var Mletras = Mtexto.split('');
  var Mnumletras = Mletras.length-1;
  for (var i=0; i<Mletras.length; i++){
    var Mletramay = Mletras[i].toUpperCase();
    
    if(Mletras[i]===Mletramay){
      
      NarrayToFront[i]=Mletras[i];
    }else if(Mletras[i]!=Mletramay){
      Mnumletras = Mnumletras +1;
      NarrayToFront[Mnumletras]=Mletras[i];
    }
  }
    var Mpalabra=NarrayToFront.join('');
    return Mpalabra
    // /console.log(Mpalabra);
}
capToFront("soyHENRY")

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   var Numpalabras = frase.split(' ').length;
   var Mpalabras = frase.split(' ');
   var Mtextorev = "";
 
   for (var i=0; i<Numpalabras; i++){
       var Mpalabra = Mpalabras[i];
       Mpalabra=Mpalabra.split('');
       Mpalabra=Mpalabra.reverse();
       Mpalabra=Mpalabra.join('');
       Mtextorev = Mtextorev+" "+Mpalabra;
       }
   const Mnewstr = Mtextorev.slice(1)
   // /console.log(Mnewstr);
   return Mnewstr
}
asAmirror("The Henry Challenge is close!")
 
function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
  let numerocap = numero.toString();
  
  numerocap = numerocap.split('');
  
  numerocap = numerocap.reverse();
  
  numerocap = numerocap.join('');
  numerocap = parseInt(numerocap)
  if (numerocap===numero){ 
   // /console.log("Es capicua");
   return ("Es capicua");
  }else 
  console.log("Matanga dijo la changa");
  return ("No es capicua");

}
capicua(1771);


function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   string =  string.replace( /["a", "b", "c"]/g , ""); 
   // /console.log(string)
   return(string)

}
 deleteAbc("a b c d e f g h i j k l m n o p q r s t u v w x y z")
 

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   
   var longs=arrayOfStrings.map(function(e,i){
      return {index:i, value: e.length};
   });
  
   longs.sort(function(a,b){
      return +(a.value>b.value || +(a.value===b.value))-1;
   });
   
   var Narray=longs.map(function(e){
      return arrayOfStrings[e.index];
   })

   //console.log(Narray);
   return Narray
}
sortArray(["aabbccddeess", "You", "are", "beautiful", "looking", "good"])

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

  var Narraynum=[];
 
  for(var i=0; i<array1.length; i++){

      for(var j=0; j<array2.length; j++){ 
       
       if (array1[i]===array2[j]){
            Narraynum.push(array2[j]);
       }
      }
   }
   
   console.log(Narraynum) 
   return Narraynum 
}
buscoInterseccion([1, 2, 3],[1, 5, 8, 3]);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
