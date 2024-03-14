API do Telegram DA INFOZAP

# 🤖 Telegram API Bot

Uma biblioteca simples em Node.js para construir bots do Telegram usando a API de Bots do Telegram.

## Instalação

Você pode instalar esta biblioteca via npm:

```bash
npm install @infozap/telegram-api-bot

Como Usar
Aqui está um exemplo básico de como usar esta biblioteca para enviar uma mensagem usando um bot do Telegram:


const TelegramApiBot = require('@infozap/telegram-api-bot');

// Substitua 'TOKEN' pelo token do seu bot
const bot = new TelegramApiBot('SEU_TOKEN_DO_BOT');

// Enviar uma mensagem
bot.sendMessage('ID_DO_CHAT', 'Olá, mundo!')
    .then(response => {
        console.log('Mensagem enviada:', response);
    })
    .catch(error => {
        console.error('Erro ao enviar mensagem:', error.message);
    });


Para mais exemplos e documentação detalhada, consulte a documentação da API fornecida pelo Telegram.

Recursos

º Enviar mensagens de texto
º Enviar fotos
º Enviar documentos
º Enviar arquivos de áudio
º Enviar localizações
º Enviar ações de chat
º Obter atualizações do bot

Contribuindo
Contribuições são bem-vindas! Se encontrar algum problema ou tiver sugestões para melhorias, por favor, abra uma issue ou envie um pull request no GitHub.

Licença
Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE para mais detalhes.
```
