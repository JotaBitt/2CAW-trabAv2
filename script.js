const btnCachorro = document.getElementById("btn-cachorro");
const btnGato = document.getElementById("btn-gato");
const btnTodos = document.getElementById("btn-todos");
let num;

btnCachorro.addEventListener('click', () => {
    filtraProd(1);
});

btnGato.addEventListener('click', () => {
    filtraProd(2);
});

btnTodos.addEventListener('click', () => {
    filtraProd(3);
});

function filtraProd(num) {
    if (num == 1) {
        $(".gato").fadeOut();
        $(".cacho").fadeIn();
    } else if(num == 2) {
        $(".cacho").fadeOut();
        $(".gato").fadeIn();

    } else {
        $(".cacho").fadeIn();
        $(".gato").fadeIn();
    }
}

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


