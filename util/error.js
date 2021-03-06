const { MessageEmbed } = require("discord.js")

module.exports = async (text, channel) => {
    let embed = new MessageEmbed()
    .setColor("RED")
    .setDescription(text)
    .setFooter("Type d!eave to make bot leave channel")
    await channel.send(embed)
}
