const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('disguise')
        .setDescription('hide yourself as another user')
        .addStringOption(option => option.setName('name').setDescription('enter name string').setRequired(true))
        .addStringOption(option => option.setName('image-url').setDescription('enter url'))
        .addAttachmentOption(option => option.setName('attachment').setDescription('attach profile picture')),

     async execute(interaction) {

        const name = interaction.options.getString('name');
        const imageURL = interaction.options.getString('image-url');
        const attachment = interaction.options.getAttachment('attachment');
        const attachmentURL = attachment.proxyURL

        exports.name = name;
        exports.imageURL = imageURL;
        exports.attachmentURL = attachmentURL;

        interaction.reply({
            content: `${name} ${imageURL} ${attachmentURL}`
        })
    }
}