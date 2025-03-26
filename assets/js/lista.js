fetch("assets/texts/lista.txt")
    .then(response => response.text())
    .then(data => {
        const listaElement = document.getElementById("lista");
        const itens = data.split("\n"); // Divide o texto em itens da lista
        itens.forEach(item => {
            if (item.trim() !== "") {
                const li = document.createElement("li");
                li.textContent = item;
                listaElement.appendChild(li);
            }
        });
    })
    .catch(error => console.error("Erro ao carregar a lista:", error));