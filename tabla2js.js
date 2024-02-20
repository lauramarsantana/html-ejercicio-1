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

    // Solo si la validación es exitosa, cambiar la ubicación
    window.location.href = "tabla2.html";
}