export function initMensagem(){
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("enviar").addEventListener("click", function(event) {
            event.preventDefault(); // Impede o envio do formulário
            alert("Em desenvolvimento");
        });
    });
}