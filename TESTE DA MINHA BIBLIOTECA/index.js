const TelegramBot = require('./TelegramBot'); // Supondo que o arquivo esteja no mesmo diretório

// Substitua 'TOKEN' pelo token do seu bot
const bot = new TelegramBot('TOKEN');

// Exemplo: Enviar uma mensagem
bot.sendMessage('123456789', 'Olá, mundo!')
    .then(response => {
        console.log('Message sent:', response);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

// Exemplo: Receber atualizações
bot.getUpdates()
    .then(updates => {
        console.log('Updates:', updates);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

// Exemplo: Configurar webhook
bot.setWebhook('https://example.com/webhook')
    .then(response => {
        console.log('Webhook set:', response);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

// Exemplo: Excluir webhook
bot.deleteWebhook()
    .then(response => {
        console.log('Webhook deleted:', response);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

// Exemplo: Obter informações sobre o bot
bot.getMe()
    .then(botInfo => {
        console.log('Bot information:', botInfo);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
