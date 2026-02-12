document.querySelector('input[type="button"]').addEventListener('click', function() {
    // Pequeno atraso para garantir que o primeiro script preencheu a div #res
    setTimeout(() => {
        let resElement = document.getElementById("res");
        let conteudoRes = resElement.innerText;
        
        // Verifica se houve erro antes de prosseguir
        if (conteudoRes.includes("[ERRO]") || conteudoRes.includes("Preencha os dados")) {
            return;
        }

        // 1. Pede o nome da máquina ao usuário
        let nomeMaquina = prompt("Digite o nome ou número da máquina:");
        if (nomeMaquina == null || nomeMaquina == "") {
            nomeMaquina = "Não informada";
        }

        // 2. Obtém data e hora atual
        let agora = new Date();
        let dataHora = agora.toLocaleDateString('pt-BR') + " às " + 
                       agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

        // 3. Formata a mensagem para o WhatsApp
        // Usamos asteriscos (*) para deixar em negrito no WhatsApp
        let mensagemWhatsApp = `*RELATÓRIO DE PRODUÇÃO*\n`;
        mensagemWhatsApp += `--------------------------\n`;
        mensagemWhatsApp += `*Máquina:* ${nomeMaquina}\n`;
        mensagemWhatsApp += `*Data:* ${dataHora}\n`;
        mensagemWhatsApp += `--------------------------\n`;
        mensagemWhatsApp += conteudoRes;

        // 4. Cria a URL sem número (abre a lista de contatos)
        let url = `https://api.whatsapp.com/send?text=${encodeURIComponent(mensagemWhatsApp)}`;

        // 5. Abre o WhatsApp
        window.open(url, '_blank');
        
    }, 150); 
});