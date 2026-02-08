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

    // 2. Cálculos principais
    let totalCaixas = pac / unidadesPorCaixa;
    let totalPaletes = totalCaixas / pal;

    // 3. Lógica de Tonelagem (Descartando o que não completou palete)
    let paletesCompletos = Math.floor(totalPaletes); // Pega apenas o número inteiro
    
    // Peso por palete (Caixas por palete * pacotes por caixa * peso do pacote) / 1000
    // Usamos 'pal' (tipo de palete) para saber quanto pesa um palete cheio
    let quilosPorPalete = (pal * unidadesPorCaixa * pes) / 1000;
    let toneladasProduzidas = (paletesCompletos * quilosPorPalete) / 1000;

    // 4. Exibir resultado
    res.innerHTML = "<strong>Relatório de Produção:</strong>";
    res.innerHTML += `<p>📦 Total de Caixas: <strong>${totalCaixas.toFixed(1)}</strong></p>`;
    res.innerHTML += `<p>🚚 Total de Paletes: <strong>${totalPaletes.toFixed(2)}</strong></p>`;
    res.innerHTML += `<hr>`;
    res.innerHTML += `<p>⚖️ Tonelagem (Paletes Fechados): <strong>${toneladasProduzidas.toFixed(3)} Ton</strong></p>`;
    res.innerHTML += `<p><small>(${paletesCompletos} paletes de ${quilosPorPalete}kg cada)</small></p>`;
    
    // Dica visual extra:
    if (totalCaixas % 1 !== 0) {
        res.innerHTML += `<p style="color: red;"><small>* Atenção: Existem caixas incompletas.</small></p>`;
    }
}