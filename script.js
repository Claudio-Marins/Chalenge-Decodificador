
const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
document.querySelector(".btn-encriptar").addEventListener("click", btnEncriptar);
document.querySelector(".btn-desencriptar").addEventListener("click", btnDesencriptar);
document.querySelector(".btn-copiar").addEventListener("click", btnCopiar);



function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(mensagemEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    mensagemEncriptada = mensagemEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (mensagemEncriptada.includes(matrizCodigo[i][0])) {
            mensagemEncriptada = mensagemEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return mensagemEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(mensagemDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    mensagemDesencriptada = mensagemDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (mensagemDesencriptada.includes(matrizCodigo[i][1])) {
            mensagemDesencriptada = mensagemDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return mensagemDesencriptada;
}

function btnCopiar() {
    const textoCopiado = mensagem.value;
    textArea.value = textoCopiado;
    mensagem.value = "";
}

