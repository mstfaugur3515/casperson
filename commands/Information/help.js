const {codeBlock, StringSelectMenuBuilder, ActionRowBuilder, EmbedBuilder} = require("discord.js")
const client = global.client;
module.exports = {
    name: "help",
    category: "Information",
    aliases: ["h","yardım","help","mhelp"],
    description: "Return all commands, or one specific command",
    args: false,
   execute: async (message, args, client, prefix) => {
  
    var l1 = await client.translate(message.guild.id,`Müzik Komutları`)
    var l2 = await client.translate(message.guild.id,`Diğer Komutlar`)
    var l3 = await client.translate(message.guild.id,"Yardım Menüsü")
    var l4 = await client.translate(message.guild.id,"Bot Tüm Dilleri Desteklemektedir!")
    const menu = new ActionRowBuilder()
    .addComponents([
    new StringSelectMenuBuilder()
    .setCustomId('help')
    .setPlaceholder(`${l3}`)
    .setOptions([
    {value:"music",label:`${l1}`,emoji:"🎵"},
    {value:"other",label:`${l2}`,emoji:"✨"},
    ])
    ])

    return message.channel.send({embeds:[new EmbedBuilder().setColor("Random").setDescription(`🇹🇷 🇫🇷 🇺🇸 🇪🇸 ${l4}`)],components:[menu]});
    }
}

client.on("interactionCreate",async(five) => {
if(!five.isStringSelectMenu())return;
var value = five.values[0];

if(value == "music"){
  five.reply({content:`${codeBlock('js',`
  !Prefix ; 
  !play 
  !skip 
  !stop 
  !queue 
  !nowplaying 
  !loop 
  !join 
  !leave 
  !clear 
  !pause 
  !resume 
  !remove 
  !shuffle 
  !lyrics 
  !skipto 
  !volume`
    )
             }`,ephemeral:true})
}

if(value == "other"){
  five.reply({content:`${codeBlock('js',`
  Prefix ; 
  !desteksunucu 
  !ping 
  !mhelp`)}`,ephemeral:true})
}
({})
}
)