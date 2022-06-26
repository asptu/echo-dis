const { SlashCommandBuilder } = require('@discordjs/builders');
let client = require('../index')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('pong'),
    
          
     async execute(interaction) {
        interaction.reply({
            content: `Command latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`
        })
    }
}