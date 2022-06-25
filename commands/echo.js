const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('echos input')
        .addStringOption((option) => 
            option
            .setName('message')
            .setDescription('the message to echo')
            .setRequired(true)
        ),
          
     async execute(interaction) {
        interaction.reply({
            content: interaction.options.getString('message')
        })
    }
}