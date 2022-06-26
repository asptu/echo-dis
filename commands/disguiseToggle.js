const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('toggle-diguise')
        .setDescription('turns disguise on or off')
    	.addBooleanOption(option => option.setName('toggle').setDescription('select true or false')),

     async execute(interaction) {

        const toggle = interaction.options.getBoolean('toggle');

        exports.toggle = toggle;

        interaction.reply({
            content: `diguise has been set to **${toggle}**`
        
        })
    }
}