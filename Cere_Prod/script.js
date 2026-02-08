function calcular() {
    // Referências aos elementos
    let txt_pac = document.getElementById("pac_num");
    let txt_pes = document.getElementById("pes_num");
    let txt_pal = document.getElementById("pal_num");
    let res = document.getElementById("res");

    // Valores convertidos
    let pac = Number(txt_pac.value);
    let pes = Number(txt_pes.value);
    let pal = Number(txt_pal.value);

    // Validação básica
    if (txt_pac.value.length == 0 || pac <= 0) {
        res.innerHTML = "<strong>[ERRO]</strong> Introduza uma quantidade de pacotes válida!";
        return;
    }

    // 1. Definir unidades por caixa com base no peso
    let unidadesPorCaixa = 0;
    if (pes === 500) {
        unidadesPorCaixa = 20;
    } else if (pes === 1000) {
        unidadesPorCaixa = 10;
    } else if (pes === 2000) {
        unidadesPorCaixa = 6;
    }

    // 2. Cálculos
    let totalCaixas = pac / unidadesPorCaixa;
    let totalPaletes = totalCaixas / pal;

    // 3. Exibir resultado
    res.innerHTML = "<strong>Relatório de Produção:</strong>";
    res.innerHTML += `<p>📦 Total de Caixas: <strong>${totalCaixas.toFixed(1)}</strong></p>`;
    res.innerHTML += `<p>🚚 Total de Paletes: <strong>${totalPaletes.toFixed(2)}</strong></p>`;
    
    // Dica visual extra:
    if (totalCaixas % 1 !== 0) {
        res.innerHTML += `<p style="color: red;"><small>* Atenção: Existem caixas incompletas (sobra de pacotes).</small></p>`;
    }
}