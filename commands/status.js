const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "status",
    description: "<:dr_heart:817449378792472636> Status about Bot <:dr_heart:817449378792472636>",
    usage: "[status]",
    aliases: ["premium","prem","status"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    
    let invite = new MessageEmbed()
    .setTitle(`<:dr_heart:817449378792472636> Status for ${client.user.username} <:dr_heart:817449378792472636>`)
    .setDescription(`<:dr_heart:817449378792472636> **Hello There it looks like your using 𝐃𝐑༒ Ultra Mode <:dr_heart:817449378792472636>** \n <:dr_heart:817449378792472636> **Your 𝐃𝐑༒ Ultra Mode will never Expire** <:dr_heart:817449378792472636>\n`)
    .setColor("BLUE")
    return message.channel.send(invite);
  },
};
