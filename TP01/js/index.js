function validarInputNotas(idMateria){
    var materiaFull = document.getElementById(idMateria); 
    var materia = materiaFull.value;
    
    if (materia < 1 || materia > 10 || materia === null) 
    {
        materiaFull.style.backgroundColor = 'red';
        alert("Incorrecto, vuelva a ingresar la nota");
        // console.log(materiaFull.placeholder); // podemos modificar con materiaFull.placeholder el mensaje de la cajita en funcion del error. 
    }
    else
    {
        materiaFull.style.backgroundColor = 'green';
    }
}


function calcularPromedio(){
    // 1- sacar los elementos y los valores
    var mate = document.getElementById("matematica").value;
    var lengua = document.getElementById("lengua").value;
    var efsi = document.getElementById("EFSI").value;
    var divPromedio = document.getElementById("div-promedio");

    // 2- elminar cualquier cosa que este en el div que vamos a usar para que no haya mas de un numero
    while(divPromedio.firstChild)
    {
        divPromedio.removeChild(divPromedio.firstChild);
    }

    // 3- computar el promedio
    var sumaNotas = parseFloat(mate) + parseFloat(lengua) + parseFloat(efsi);
    var promedio = sumaNotas/3;
    console.log(promedio);


    // 4- crear el texto a appendear y darle un color segun la nota
    var promedioHtml = document.createElement("h3");
    promedioHtml.innerText = promedio;
    if(promedio >=6)
    {
        promedioHtml.style.color = "SeaGreen";
    }
    else
    {
        promedioHtml.style.color = "OrangeRed"
    }

    // 5- agregamos el textito al div
    divPromedio.appendChild(promedioHtml);

    // tenia un problema y es que cuando agregaba el textito y tocaba varias veces se apilaban. se me ocurren dos soluciones
        // la primera es la que esta abajo, que es poner un timer que a los 2 segundos de aparecer remueva al promedio del div
        // la otra, que es un poco menos mono, es que al principio de la funcion eliminen todos los childs.

        // setTimeout(() => {
        //     divPromedio.removeChild(promedioHtml); 
        // }, 2000);
}

function mayorNota(){

    // 1- declaramos todas las weas. por un tema de comodidad puse todo, pero no creo que sea lo mejor.
    var mate = document.getElementById("matematica").value;
    var lengua = document.getElementById("lengua").value;
    var efsi = document.getElementById("EFSI").value;

    var efsiFull = document.getElementById("EFSI");
    var mateFull = document.getElementById("matematica");
    var lenguaFull = document.getElementById("lengua");

    var divResultado = document.getElementById("div-promedio");

    // 2- limpiamos la pantalla de resultados viejos
    while(divResultado.firstChild)
    {
        divResultado.removeChild(divResultado.firstChild);
    }

    // 3- conseguimos la nota maxima
    var arr = [mate, lengua, efsi];
    var max = Math.max(...arr);


    // 4- hacemos un array donde se van a guardar todas las materias cuya nota coincida con la maxima. puede ser 1 o mas.
    var materiasCoinciden = [];

    // 5- rellenamos el array segun las materias que cumple.
    if (max == mate) 
    {
        materiasCoinciden.push(mateFull);
    }
    if (max == lengua) 
    {
        materiasCoinciden.push(lenguaFull);
    }
    if (max == efsi)
    {
        materiasCoinciden.push(efsiFull);
    }

    // 6- armar un header condicional segun la cantidad de materias a mostrar
    var header = document.createElement('h1');
    if (materiasCoinciden.length > 1) 
    {
        header.innerText = "Las materias con mayor nota son: ";
    }
    else
    {
        header.innerText = "La materia con mayor nota es: ";
    }
    divResultado.appendChild(header);


    // 7- por cada materia que coincida con la nota maxima:
    materiasCoinciden.forEach(mat => 
    {
        // cambiale el color a la cajita
        mat.style.backgroundColor = "blue";

        // armate un textito lindo para poner abajo
        var textoHTML = document.createElement("h3");
        textoHTML.innerText = mat.getAttribute('name').toUpperCase();
        textoHTML.style.color = "blue";
        divResultado.appendChild(textoHTML);
    });
}