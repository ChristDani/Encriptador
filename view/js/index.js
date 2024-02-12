// botones
const btnEncriptar = document.getElementById('btnCifrar');
const btnDesencriptar = document.getElementById('btnDescifrar');
const btnCopiar = document.getElementById('btnCopiar');
const btnCancelar = document.getElementById('btnCancelar');

// textos
const textToChange = document.getElementById('textoAEncriptar');
const TextToShow = document.getElementById('textToShow');
const withoutMessage = document.getElementById('withoutMessage');

// operaciones

function changeText(tipo, texto) {
    if (tipo == 1) { // cifrando
        TextToShow.innerHTML = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
    } else if (tipo == 2) { // descifrando
        TextToShow.innerHTML = texto.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
    }
}

function encriptar() {
    console.log('encriptando');
    if (textToChange.value != '') {
        changeText(1, textToChange.value);
        withoutMessage.classList.add('hidden');
        TextToShow.classList.remove('hidden');
    }
    else {
        withoutMessage.classList.remove('hidden');
        TextToShow.classList.add('hidden');
    }
}

function desencriptar() {
    console.log('desencriptando');
    if (textToChange.value != '') {
        changeText(2, textToChange.value);
        withoutMessage.classList.add('hidden');
        TextToShow.classList.remove('hidden');
    }
    else {
        withoutMessage.classList.remove('hidden');
        TextToShow.classList.add('hidden');
    }
}

function copiar() {
    navigator.clipboard.writeText(TextToShow.textContent);
}

function cancelar() {
    textToChange.value = '';
    withoutMessage.classList.remove('hidden');
    TextToShow.classList.add('hidden');
}