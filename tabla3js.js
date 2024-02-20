function back(){
    window.location.href = "tabla2.html";
}
function leerGET(){
    var cadGET = location.search.substr(1,location.search.length);
    var arrGET = cadGET.split("&");
    var asocGET = new Array();
    var variable = "";
    var valor = "";
    for(i=0;i<arrGET.length;i++){
        var aux = arrGET[i].split("=");
        variable = aux[0];
        valor = aux[1];
        asocGET[variable]=valor;
    }
    return asocGET;
}
function escribir(){
    var paresVarValor = leerGET();
    document.getElementById("name1").innerHTML = paresVarValor["name1"];
    document.getElementById("lastname1").innerHTML = paresVarValor["lastName1"];
}




