const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('linkchannel')
        .setDescription('Choose a channel to echo to')
        .addChannelOption(option => option.setName('channel').setDescription('Select a channel').addChannelTypes(0)),

     async execute(interaction) {

        const pChannel = interaction.options.getChannel('channel');
        const cChannel = interaction.channel

        let bothChannels = [];

        bothChannels.push(pChannel)
        bothChannels.push(cChannel)

        
        interaction.reply({
            content: `polling all messages to ${pChannel}`,
            emphemeral: true
        })
    }
}