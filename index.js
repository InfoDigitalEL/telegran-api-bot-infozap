const axios = require('axios');

class TelegramApiBot {
    constructor(token) {
        this.token = token;
        this.baseURL = `https://api.telegram.org/bot${token}`;
    }

    async sendMessage(chatId, text) {
        const url = `${this.baseURL}/sendMessage`;
        const params = {
            chat_id: chatId,
            text: text
        };

        try {
            const response = await axios.post(url, params);
            return response.data;
        } catch (error) {
            throw new Error(`Erro ao enviar mensagem: ${error.message}`);
        }
    }

    async sendPhoto(chatId, photo, caption = '') {
        const url = `${this.baseURL}/sendPhoto`;
        const params = {
            chat_id: chatId,
            photo: photo,
            caption: caption
        };

        try {
            const response = await axios.post(url, params);
            return response.data;
        } catch (error) {
            throw new Error(`Erro ao enviar foto: ${error.message}`);
        }
    }

    async sendDocument(chatId, document, caption = '') {
        const url = `${this.baseURL}/sendDocument`;
        const params = {
            chat_id: chatId,
            document: document,
            caption: caption
        };

        try {
            const response = await axios.post(url, params);
            return response.data;
        } catch (error) {
            throw new Error(`Erro ao enviar documento: ${error.message}`);
        }
    }

    async sendAudio(chatId, audio, caption = '') {
        const url = `${this.baseURL}/sendAudio`;
        const params = {
            chat_id: chatId,
            audio: audio,
            caption: caption
        };

        try {
            const response = await axios.post(url, params);
            return response.data;
        } catch (error) {
            throw new Error(`Erro ao enviar áudio: ${error.message}`);
        }
    }

    async sendLocation(chatId, latitude, longitude) {
        const url = `${this.baseURL}/sendLocation`;
        const params = {
            chat_id: chatId,
            latitude: latitude,
            longitude: longitude
        };

        try {
            const response = await axios.post(url, params);
            return response.data;
        } catch (error) {
            throw new Error(`Erro ao enviar localização: ${error.message}`);
        }
    }

    async sendChatAction(chatId, action) {
        const url = `${this.baseURL}/sendChatAction`;
        const params = {
            chat_id: chatId,
            action: action
        };

        try {
            const response = await axios.post(url, params);
            return response.data;
        } catch (error) {
            throw new Error(`Erro ao enviar ação de chat: ${error.message}`);
        }
    }

    async getUpdates(offset) {
        const url = `${this.baseURL}/getUpdates`;
        const params = {
            offset: offset
        };

        try {
            const response = await axios.get(url, { params });
            return response.data.result;
        } catch (error) {
            if (error.response && error.response.status === 409) {
                console.error('Erro 409: Conflito ao obter atualizações. Tentativa de buscar atualizações conflitantes.');
                return []; // Retorna uma lista vazia quando não há atualizações disponíveis
            }
            throw new Error(`Erro ao obter atualizações: ${error.message}`);
        }
    }
async setWebhook(url) {
        const webhookUrl = `${this.baseURL}/setWebhook`;
        const params = {
            url: url
        };

        try {
            const response = await axios.post(webhookUrl, params);
            return response.data;
        } catch (error) {
            throw new Error(`Erro ao configurar webhook: ${error.message}`);
        }
    }

    async deleteWebhook() {
        const url = `${this.baseURL}/deleteWebhook`;

        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            throw new Error(`Erro ao excluir webhook: ${error.message}`);
        }
    }

    async getMe() {
        const url = `${this.baseURL}/getMe`;

        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            throw new Error(`Erro ao obter informações do bot: ${error.message}`);
        }
    }
}

module.exports = TelegramApiBot;