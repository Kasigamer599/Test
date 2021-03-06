const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error")

module.exports = {
  info: {
    name: "nowplaying",
    description: "<:dr_heart:817449378792472636> To show the music which is currently playing in this server <:dr_heart:817449378792472636>",
    usage: "",
    aliases: ["np"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("There is nothing playing in this server.", message.channel);
    let song = serverQueue.songs[0]
    let thing = new MessageEmbed()
      .setAuthor("Now Playing")
      .setThumbnail(song.img)
      .setColor("BLUE")
      .addField("<:dr_heart:817449378792472636> **Name** <:dr_heart:817449378792472636>", song.title, true)
      .addField("<:dr_heart:817449378792472636> **Duration** <:dr_heart:817449378792472636>", song.duration, true)
      .addField("<:dr_heart:817449378792472636> **Requested by** <:dr_heart:817449378792472636>", song.req.tag, true)
      .setFooter(`Views: ${song.views} | ${song.ago}`)
    return message.channel.send(thing)
  },
};
