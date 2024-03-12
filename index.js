const axios = require('axios');

class TelegramBot {
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
            throw new Error(`Error sending message: ${error.message}`);
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
            throw new Error(`Error getting updates: ${error.message}`);
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
            throw new Error(`Error setting webhook: ${error.message}`);
        }
    }

    async deleteWebhook() {
        const url = `${this.baseURL}/deleteWebhook`;

        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            throw new Error(`Error deleting webhook: ${error.message}`);
        }
    }

    async getMe() {
        const url = `${this.baseURL}/getMe`;

        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            throw new Error(`Error getting bot information: ${error.message}`);
        }
    }
}

module.exports = TelegramBot;
