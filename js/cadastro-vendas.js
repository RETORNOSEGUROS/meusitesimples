document.getElementById("form-venda").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    // Pegando os valores dos campos
    const corretor = document.getElementById("corretor").value;
    const valorVenda = parseFloat(document.getElementById("valor-venda").value);
    const percentualComissao = parseFloat(document.getElementById("percentual-comissao").value);

    // Calculando o valor da comissão
    const comissao = (valorVenda * percentualComissao) / 100;

    // Criar o objeto de venda
    const venda = {
        corretor: corretor,
        valorVenda: valorVenda,
        comissao: comissao
    };

    // Salvar a venda no localStorage
    let vendas = JSON.parse(localStorage.getItem('vendas')) || [];
    vendas.push(venda);
    localStorage.setItem('vendas', JSON.stringify(vendas));

    // Exibindo os dados no console
    console.log(`Venda registrada: Corretor: ${corretor}, Valor da Venda: ${valorVenda}, Comissão: ${comissao}`);

    // Mostra a comissão calculada
    alert(`Comissão calculada para o corretor ${corretor}: R$ ${comissao.toFixed(2)}`);

    // Limpar os campos após o cadastro
    document.getElementById("form-venda").reset();

    // Atualizar o dashboard
    window.location.href = "dashboard.html";  // Redireciona para o dashboard para ver a venda
});
