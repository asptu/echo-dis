const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('linkchannel')
        .setDescription('Choose a channel to echo to')
        .addChannelOption(option => option.setName('channel').setDescription('Select a channel').addChannelTypes(0)),

     async execute(interaction) {

        const pChannel = interaction.options.getChannel('channel');
        const cChannel = interaction.channel

        const fs =  require('fs')

        fs.writeFileSync('./data/cChannel.txt', cChannel.id);
        fs.writeFileSync('./data/pChannel.txt', pChannel.id);

        interaction.reply({
            content: `polling all messages to ${pChannel}`,
            emphemeral: true
        })
    }
}