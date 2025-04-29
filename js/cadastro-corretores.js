document.getElementById("form-corretor").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado de forma tradicional

    // Pegando os valores dos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    // Simulando o envio para o backend (pode ser Firebase ou outro)
    console.log("Corretor Cadastrado: ", { nome, email, telefone });

    // Após o cadastro, você pode limpar os campos e mostrar uma mensagem
    alert("Corretor cadastrado com sucesso!");
    document.getElementById("form-corretor").reset();
});
