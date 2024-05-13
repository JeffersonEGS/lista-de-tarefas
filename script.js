function addTask() {
    var lista = document.getElementById("lista");
    var lista1 = document.getElementById("lista1");

    if (lista.value !== "") {
        var li = document.createElement("li");
        li.textContent = lista.value;

        var deletarBtn = document.createElement("button");
        deletarBtn.textContent = "Deletar";
        deletarBtn.className = "delete-btn";
        deletarBtn.onclick = function() {
            li.remove();
        };

        var editBtn = document.createElement("button");
        editBtn.textContent = "Editar";
        editBtn.className = "edit-btn";
        editBtn.onclick = function() {
            var newText = prompt("Editar tarefa:", li.textContent);
            if (newText !== null) {
                li.textContent = newText;
                li.appendChild(editBtn); // Adicionando o botão de editar novamente
                li.appendChild(deletarBtn); // Mantendo o botão de deletar
            }
        };

        li.appendChild(editBtn);
        li.appendChild(deletarBtn);
        lista1.appendChild(li);

        lista.value = "";
    } else {
        alert("Por favor, insira uma tarefa!");
    }
}
