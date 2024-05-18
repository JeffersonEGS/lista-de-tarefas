function addTask() {
    var lista = document.getElementById("lista");
    var lista1 = document.getElementById("lista1");

    if (lista.value !== "") {
        var li = document.createElement("li");
        li.textContent = lista.value;

        var deletarBtn = document.createElement("button");
        deletarBtn.textContent = "Deletar";
        deletarBtn.className = "delete-btn";
        deletarBtn.onclick = () => {
            li.remove();
        };

        var confirmBtn = document.createElement("button");
        confirmBtn.textContent = "Confirmar";
        confirmBtn.className = "confirm-btn";
        confirmBtn.onclick = () => {
            li.classList.toggle("confirmado"); // Adiciona ou remove a classe "confirmado" no elemento li ao clicar no botão Confirmar
        };

        var editBtn = document.createElement("button");
        editBtn.textContent = "Editar";
        editBtn.className = "edit-btn";
        editBtn.onclick = () => {
            var newText = prompt("Editar tarefa:", li.textContent);
            if (newText !== null) {
                li.textContent = newText;
                li.appendChild(editBtn); // Adicionando o botão de editar novamente
                li.appendChild(deletarBtn); // Mantendo o botão de deletar
                li.appendChild(confirmBtn); // Adicionando o botão de confirmar
            }
        };

        li.appendChild(editBtn);
        li.appendChild(deletarBtn);
        li.appendChild(confirmBtn);
        lista1.appendChild(li);

        lista.value = "";
    } else {
        alert("Por favor, insira uma tarefa!");
    }
}
