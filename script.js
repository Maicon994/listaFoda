let titulo = window.document.getElementById("titulo")
let paragrafos = document.getElementsByClassName("texto")
let itens = document.getElementsByTagName("p")
let textEntrada = document.querySelector("#entrada")
let lista = document.querySelector("#lista")

titulo.innerText = "LISTA DE COMPRAS"
paragrafos[0].style.color = "blue"

document.getElementById("btnAdicionar").addEventListener("click", function() {
    console.log("Cliquei")
    if (textEntrada.value.trim() !== ""){
        let li = document.createElement("li")
        li.innerText = textEntrada.value; 

        li.addEventListener("click", function() {
            li.classList.toggle("concluida")
        })

        let botaoRemover = document.createElement("span")
        botaoRemover.innerHTML = " X "
        botaoRemover.classList.add("btnRemover")

        botaoRemover.addEventListener("click", (event) => {
            event.stopPropagation();
            li.remove();
        })

        lista.appendChild(li)
        li.appendChild(botaoRemover)

        textEntrada.value = " "
    }
})

document.getElementById("btnLimpar").addEventListener("click", function (){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }
})
document.getElementById("btnMostrarItensComprados").addEventListener("click", function() {
    const itensComprados = document.querySelectorAll("#lista .concluida");
    if (itensComprados.length === 0) {
        alert("Nenhum item comprado.");
    } else {
        let mensagem = "Itens Comprados:\n";
        itensComprados.forEach((item) => {
            mensagem += "- " + item.firstChild.textContent.trim() + "\n";
        });
        alert(mensagem);
    }
});

document.getElementById("btnMostrarItensPendentes").addEventListener("click", function() {
    const itensPendentes = document.querySelectorAll("#lista li:not(.concluida)");    
    if (itensPendentes.length === 0) {
        alert("Nenhum item pendente.");
    } else {
        let mensagem = "Itens Pendentes:\n";
        itensPendentes.forEach((item) => {
            mensagem += "- " + item.firstChild.textContent.trim() + "\n";
        });
        alert(mensagem);
    }
});                          

