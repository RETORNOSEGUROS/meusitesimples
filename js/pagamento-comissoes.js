document.getElementById("form-pagamento").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    // Pegando os valores dos campos
    const corretor = document.getElementById("corretor").value;
    const valorPago = parseFloat(document.getElementById("valor-pago").value);

    // Simulando o pagamento da comissão
    let vendas = JSON.parse(localStorage.getItem('vendas')) || [];
    
    // Encontrar a venda do corretor
    const venda = vendas.find(venda => venda.corretor === corretor);

    if (venda) {
        // Atualizando o valor pago (considerando que cada venda só será paga uma vez)
        venda.pagamentoRealizado = true;
        venda.valorPago = valorPago;

        // Salvar de volta no localStorage
        localStorage.setItem('vendas', JSON.stringify(vendas));

        // Exibir mensagem de sucesso
        alert(`Pagamento de R$ ${valorPago.toFixed(2)} registrado para o corretor ${corretor}.`);

        // Limpar os campos
        document.getElementById("form-pagamento").reset();
    } else {
        alert(`Corretor ${corretor} não encontrado!`);
    }
});
