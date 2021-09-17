// JS

//  - Validar paso a paso hacer uso de console.log() y la herramienta de desarrollador - 

// Crear una función llamada blurring que se encargará de realizar:

// - El conteo de carga, dentro de la misma deberán crear un condicional que permita visualizar los números de 1 a 100% (probar con console.log)
// - Una vez tengan el conteo podrán realizar un innerText para que cambie el valor de la numeración (esta propiedad establece o devuelve el contenido de 
// texto del nodo especificado.)
// - Una vez tengamos el paso anterior deberán tener en cuenta lo siguiente:

// Para terminar el ejercicio debemos tener en cuenta que el valor de opacidad no será el valor de carga porque va de 0 a 100 y 
// la opacidad va de 0 a 1, por lo que comenzará en nuestro caso, completamente opaco entonces iremos de 1 a 0, teniendo en cuenta lo siguiente 
// entonces necesitamos una función específica
// que nos ayude a realizar un mapa de rango de números.  (básicamente de cero a 100 para pasar de uno a cero en la misma cantidad de tiempo.)

// revisar cómo hacerlo a través de Javascript y cómo aplicaría esa función en los números de carga y en el blur del efecto.  buscar 
// "mapear un rango de números a otro rango de números"


const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

 function blurring() {


     if(load<=100){   
        console.log(load)

      //0-100%
      loadText.innerText = load + '%'
    //   console.log(loadText.innerText = load + '%')
      load++  


     // 1-0
      loadText.style.opacity = (100 - load)/100


    //100-0px
      let x = (80 - load)+'px)' //40px)
      bg.style.filter = "blur("+x
     }
 }


   






//     // //100-0px
//     // bg.style.filter = 

//     }
// 
