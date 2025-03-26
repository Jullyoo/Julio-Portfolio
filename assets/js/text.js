fetch("assets/texts/apresentacao.txt")
    .then(response => response.text())
    .then(data => {
        document.getElementById("text").textContent = data;
    })
    .catch(error => console.error("Erro ao carregar o texto:", error));