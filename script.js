
function limpaCampo (num) {
    if (num == 1) {
        const campo = document.getElementById("nome");
        campo.placeholder="";
    }
    
    if (num == 2) {
        const campo = document.getElementById("email");
        campo.placeholder="";
    }
    if (num == 3) {
        const campo = document.getElementById("celular");
        campo.placeholder="";
    }
}

