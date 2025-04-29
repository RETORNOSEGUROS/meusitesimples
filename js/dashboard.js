// Função para carregar as vendas e comissões salvas no localStorage
function carregarVendas() {
    const vendas = JSON.parse(localStorage.getItem('vendas')) || []; // Carregar dados ou criar uma lista vazia
    const relatorioVendas = document.getElementById("relatorio-vendas");

    if (vendas.length === 0) {
        relatorioVendas.innerHTML = "<p>Nenhuma venda registrada.</p>";
        return;
    }

    // Gerar a tabela com as vendas e comissões
    let tabelaHTML = `
        <table>
            <thead>
                <tr>
                    <th>Corretor</th>
                    <th>Valor da Venda</th>
                    <th>Comissão</th>
                    <th>Status do Pagamento</th>
                </tr>
            </thead>
            <tbody>
    `;

    vendas.forEach(venda => {
        const statusPagamento = venda.pagamentoRealizado ? `Pago (R$ ${venda.valorPago.toFixed(2)})` : 'Pendente';

        tabelaHTML += `
            <tr>
                <td>${venda.corretor}</td>
                <td>R$ ${venda.valorVenda.toFixed(2)}</td>
                <td>R$ ${venda.comissao.toFixed(2)}</td>
                <td>${statusPagamento}</td>
            </tr>
        `;
    });

    tabelaHTML += `</tbody></table>`;
    relatorioVendas.innerHTML = tabelaHTML;
}

// Chama a função de carregar vendas quando a página for carregada
window.onload = carregarVendas;
