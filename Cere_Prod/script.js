function calcular() {
    let txt_pac = document.getElementById("pac_num");
    let txt_pes = document.getElementById("pes_num");
    let txt_pal = document.getElementById("pal_num");
    let res = document.getElementById("res");

    let pac = Number(txt_pac.value);
    let pes = Number(txt_pes.value);
    let pal = Number(txt_pal.value);

    if (txt_pac.value.length == 0 || pac <= 0) {
        res.innerHTML = "<strong>[ERRO]</strong> Introduza uma quantidade válida!";
        return;
    }

    let unidadesPorCaixa = (pes === 500) ? 20 : (pes === 1000) ? 10 : 6;

    let totalCaixas = pac / unidadesPorCaixa;
    let totalPaletes = totalCaixas / pal;

    // Lógica de Tonelagem (Apenas paletes fechados)
    let paletesCompletos = Math.floor(totalPaletes); 
    let quilosPorPalete = (pal * unidadesPorCaixa * pes) / 1000;
    let toneladasProduzidas = (paletesCompletos * quilosPorPalete) / 1000;

    // Formatação x,xx
    let toneladaFormatada = toneladasProduzidas.toFixed(2).replace('.', '.');

    // Exibição do Resultado (Sem o traço <hr>)
    res.innerHTML = "<strong>Relatório de Produção:</strong>";
    res.innerHTML += `<p>📦 Total de Caixas: <strong>${totalCaixas.toFixed(1)}</strong></p>`;
    res.innerHTML += `<p>🚚 Total de Paletes: <strong>${totalPaletes.toFixed(2)}</strong></p>`;
    res.innerHTML += `<p>⚖️ Tonelagem (Paletes Fechados): <strong>${toneladaFormatada} Ton</strong></p>`;
    res.innerHTML += `<p><small>(${paletesCompletos} paletes de ${quilosPorPalete}kg cada)</small></p>`;
    
    if (totalCaixas % 1 !== 0) {
        res.innerHTML += `<p style="color: red;"><small>* Atenção: Existem caixas incompletas.</small></p>`;
    }
}