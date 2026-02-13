// Esta função será chamada pelo script principal ou pelo clique
function enviarWhatsApp() {
    let resElement = document.getElementById("res");
    
    // Pegamos apenas o texto, ignorando o botão que criamos
    let conteudoRes = resElement.innerText.replace("Enviar para WhatsApp", "");

    if (conteudoRes.includes("[ERRO]") || conteudoRes.includes("Preencha os dados")) {
        return;
    }

    let nomeMaquina = prompt("Digite o nome ou número da máquina:");
    if (nomeMaquina == null || nomeMaquina == "") {
        nomeMaquina = "Não informada";
    }

    let agora = new Date();
    let dataHora = agora.toLocaleDateString('pt-BR') + " às " + 
                   agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    let mensagemWhatsApp = `*RELATÓRIO DE PRODUÇÃO*\n`;
    mensagemWhatsApp += `--------------------------\n`;
    mensagemWhatsApp += `*Máquina:* ${nomeMaquina}\n`;
    mensagemWhatsApp += `*Data:* ${dataHora}\n`;
    mensagemWhatsApp += `--------------------------\n`;
    mensagemWhatsApp += conteudoRes;

    let url = `https://api.whatsapp.com/send?text=${encodeURIComponent(mensagemWhatsApp)}`;
    window.open(url, '_blank');
}

// Observa o campo de resultado. Quando o cálculo aparecer, ele cria o botão.
const targetNode = document.getElementById('res');
const observer = new MutationObserver((mutations) => {
    // Se o resultado mudou e não contém o botão ainda, e não é o erro
    if (!document.getElementById('btnWhats') && !targetNode.innerText.includes("[ERRO]")) {
        
        let btn = document.createElement("button");
        btn.id = "btnWhats";
        btn.innerHTML = "📲 Enviar para WhatsApp";
        btn.style.marginTop = "15px";
        btn.style.padding = "10px";
        btn.style.backgroundColor = "#25D366";
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.borderRadius = "5px";
        btn.style.cursor = "pointer";
        btn.style.fontWeight = "bold";
        btn.style.width = "100%";
        
        btn.onclick = enviarWhatsApp;
        targetNode.appendChild(document.createElement("br"));
        targetNode.appendChild(btn);
    }
});

observer.observe(targetNode, { childList: true });