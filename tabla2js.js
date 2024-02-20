
function validar(campoId){
    let campo = document.getElementById(campoId);
    if(campo.value==""){
        alert("El campo "+campoId+" está vacio");
        event.preventDefault();
        return false;
    }
    else{
        console.log(":(((((");
        campo.value = ""; //clear field
        return true;
    }
}

function validarForm(){
    if(!validar('name1')){
        return;
    }
    if(!validar('lastname1')){
        return;
    }
    if(!validar('name2')){
        return;
    }
    if(!validar('lastname2')){
        return;
    }
    if(!validar('name3')){
        return;
    }
    if(!validar('lastname3')){
        return;
    }
    if(!validar('name4')){
        return;
    }
    if(!validar('lastname4')){
        return;
    }
   
    var name1Value = document.getElementById('name1').value;
    var lastname1Value = document.getElementById('lastname1').value;
    var name2Value = document.getElementById('name2').value;
    var lastname2Value = document.getElementById('lastname2').value;
    var name3Value = document.getElementById('name3').value;
    var lastname3Value = document.getElementById('lastname3').value;
    var name4Value = document.getElementById('name4').value;
    var lastname4Value = document.getElementById('lastname4').value;
    // Construir la URL con los parámetros
    var url = "tabla2.html?" +
              "name1=" + encodeURIComponent(firstName1Value) + "&lastname1=" + encodeURIComponent(lastName1Value) +
              "&name2=" + encodeURIComponent(firstName2Value) + "&lastname2=" + encodeURIComponent(lastName2Value) +
              "&name3=" + encodeURIComponent(firstName3Value) + "&lastname3=" + encodeURIComponent(lastName3Value) +
              "&name4=" + encodeURIComponent(firstName4Value) + "&lastname4=" + encodeURIComponent(lastName4Value);

    // Redirigir a la nueva página con los parámetros en la URL
    window.location.href = url;
}
function volver(){
    window.location.href= "tabla.html";
}




