
document.getElementById("boton1").onclick=function(){
    console.log("capturamos el evento click")
    document.getElementById("demo").innerHTML= "Soy Estudiante de Sistemas de Información en la Universidad de Nacional de Lújan.Me interesa insertarme en el ambito laboral, para adquirir conocimiento y alcanzar objetivos. Soy aplicada constante y trabajo con mucha responsabilidad."
    document.getElementById("imagen1").style.display= "block";
    document.getElementById("imagformacion").style.display= "none";
    document.getElementById("imagexperiencia").style.display= "none";
    document.getElementById("imagcompetencia").style.display="none";
}

document.getElementById("boton2").onclick=function(){
    console.log("capturamos el evento click");
    document.getElementById("demo").innerHTML= " Formación:";
    document.getElementById("imagformacion").style.display= "block";
    document.getElementById("imagen1").style.display= "none";
    document.getElementById("imagidioma").style.display= "none";
    document.getElementById("imagexperiencia").style.display= "none";
    document.getElementById("imagcompetencia").style.display="none";
    
}


document.getElementById("boton3").onclick=function(){
    console.log("capturamos el evento click");
    document.getElementById("demo").innerHTML = "Idiomas: ";
    document.getElementById("imagidioma").style.display= "block";
    document.getElementById("imagen1").style.display= "none";
    document.getElementById("imagformacion").style.display= "none";
    document.getElementById("imagexperiencia").style.display= "none";
    document.getElementById("imagcompetencia").style.display="none";
}

document.getElementById("boton4").onclick=function(){
    console.log("capturamos el evento click");
    document.getElementById("demo").innerHTML = "Competencias:"
    document.getElementById("imagcompetencia").style.display= "block";
    document.getElementById("imagen1").style.display= "none";
    document.getElementById("imagformacion").style.display= "none";
    document.getElementById("imagidioma").style.display= "none";
    document.getElementById("imagexperiencia").style.display= "none";
}
document.getElementById("boton5").onclick=function(){
    console.log("capturamos el evento click");
    document.getElementById("demo").innerHTML = "Experiencia laboral: "
    document.getElementById("imagexperiencia").style.display= "block";
    document.getElementById("imagen1").style.display= "none";
    document.getElementById("imagcompetencia").style.display="none";
    document.getElementById("imagformacion").style.display= "none";
    document.getElementById("imagidioma").style.display= "none";
}
