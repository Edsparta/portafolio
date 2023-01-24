function encriptarTexto(stringEnc){
    let matriz =[["a", "ai"], ["e", "enter"],["i", "imes"],["o","ober"],["u","ufat"]];
    stringEnc = stringEnc.toLowerCase();
    for(let i =0; i<matriz.length; i++)
    {
        if(stringEnc.includes(matriz[i][0]))
        {
            stringEnc = stringEnc.replaceAll(matriz[i][0], matriz[i][1])
        }
    }
    return stringEnc;
}
function desencriptarText(stringDes){
    let matriz =[["a", "ai"], ["e", "enter"],["i", "imes"],["o","ober"],["u","ufat"]];
    stringDes = stringDes.toLowerCase();
    for (let i = 0; i < matriz.length; i++) {
        if (stringDes.includes(matriz[i][1])) {
            stringDes = stringDes.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }
    return stringDes;
}
var mensajeNatural =document.querySelector(".texto-area");
var mensajeResuelto =document.querySelector(".msj-resultado");


function encriptar(){
 var msjEncriptado = encriptarTexto(mensajeNatural.value);
 mensajeResuelto.value = msjEncriptado;
 mensajeResuelto.getElementsByClassName.backgroundImage="none";
 mensajeNatural="";
}
function desencriptar(){
    var msjEncriptado = desencriptarText(mensajeNatural.value);
    mensajeResuelto.value = msjEncriptado;
    mensajeNatural.value="";
}
function copiar(){
    var msjCopiado = document.getElementById("msj-resultado");
    msjCopiado.select();
    msjCopiado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(msjCopiado.value);
    document.getElementById("msj-resultado").innerHTML = '';
}