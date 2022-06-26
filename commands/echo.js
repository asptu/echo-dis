const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("echo")
    .setDescription("echo a message to a channel")
    .addChannelOption(option =>
        option
        .setName('destination')
        .setDescription('Select a channel')
        .setRequired(true)
        .addChannelTypes(0)
        )
    .addStringOption(option =>
        option
            .setName("message")
            .setDescription("message contents")
            .setRequired(true)
            ),

    
     async execute(interaction) {

        const message = interaction.options.getString('message')
        const channel = interaction.options.getChannel('destination')

        channel.send(message)

        interaction.reply({
            content: `Sent ${message} to ${channel}`,
            emphemeral: true

        })
    }
}