const chatWindow = document.getElementById('chat-window');
const inputField = document.getElementById('user-input');

// Função para adicionar mensagens na tela
function adicionarMensagem(texto, tipo) {
    const div = document.createElement('div');
    div.classList.add('msg', tipo);
    div.innerHTML = texto;
    chatWindow.appendChild(div);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Função chamada pelo botão ou pelo Enter
function enviarComando() {
    const comando = inputField.value.trim();
    if (comando === "") return;

    adicionarMensagem(comando, 'user');
    inputField.value = "";

    // Chamada da lógica que os alunos irão desenvolver
    processarComando(comando);
}

// Permitir envio com a tecla Enter
inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') enviarComando();
});

/* ============================================================
ESPAÇO PARA DESENVOLVER A LÓGICA
============================================================
*/

function processarComando(input) {
    // Exemplo de como começar:
    if (input === "1") {
        adicionarMensagem("Iniciando módulo de <b>Vendas</b>... <br> Digite o valor do produto:", "system");
    } 
    else if (input === "2") {
        adicionarMensagem("Acessando <b>RH</b>... <br> Listagem de funcionários indisponível no momento.", "system");
    }
    else if (input === "3") {
        adicionarMensagem("Saindo do sistema... Até logo!", "system");
    }
    else {
        adicionarMensagem("⚠️ Comando inválido. Tente 1, 2 ou 3.", "system");
    }
}