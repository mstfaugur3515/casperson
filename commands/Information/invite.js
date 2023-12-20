const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
module.exports = {
    name: "invite",
    category: "Information",
    aliases: [ "desteksunucu","davet"],
    description: "invite Five",
    args: false,
   execute: async (message, args, client, prefix) => {
    var l1 = await client.translate(message.guild.id,`Katıl Butonuna Basarak destek sunucumuza gelebilir ve yapımcım ile iletişime geçebilirsin <@648650778147422213>!`)
    var l2 = await client.translate(message.guild.id,`Katıl`)
return message.channel.send({embeds: [new EmbedBuilder().setColor("Random").setDescription(`> **${l1}**`)], components: [new ActionRowBuilder().addComponents(new ButtonBuilder().setLabel(`${l2}`).setStyle(ButtonStyle.Link).setURL(`https://discord.gg/jpqbYPskZz`))]})
    }
}