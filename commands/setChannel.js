const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setchannel')
        .setDescription('Choose a channel to echo to')
        .addChannelOption(option => option.setName('destination').setDescription('Select a channel')),

     async execute(interaction) {
        interaction.reply({
            content: 'pong'
        })
    }
}