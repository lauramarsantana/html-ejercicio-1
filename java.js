const form = document.getElementById("form");
const firstName1 = document.getElementById('name1');
const lastName1 = document.getElementById("lastname1");
const firstName2 = document.getElementById("name2");
const lastName2 = document.getElementById("lastname2");
const firstName3 = document.getElementById("name3");
const lastName3 = document.getElementById("lastname3");
const firstName4 = document.getElementById("name4");
const lastName4 = document.getElementById("lastname4");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let firstName1Value = firstName1.value;
    let LastName1Value = lastName1.value;
    sessionStorage.setItem('student1', JSON.stringify([firstName1Value, LastName1Value]));
    let firstName2Value = firstName2.value;
    let lastName2Value = lastName2.value;
    sessionStorage.setItem('student2', JSON.stringify([firstName2Value,lastName2Value]));
    let firstName3Value = firstName3.value;
    let lastName3Value = lastName3.value;
    sessionStorage.setItem('student3', JSON.stringify([firstName3Value, lastName3Value]));
    let firstName4Value = firstName4.value;
    let lastName4Value = lastName4.value;
    sessionStorage.setItem('student4', JSON.stringify([firstName4Value,lastName4Value]));

    //window.location.href = "tabla2.html";

})

function validar(campoId){
    let campo = document.getElementById(campoId);
    if(campo.value==""){
        alert(campoId+" esta vacio");
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

    // Solo si la validación es exitosa, cambiar la ubicación
    window.location.href = "tabla2.html";
}