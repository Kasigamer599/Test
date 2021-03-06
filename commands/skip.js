const { Util, MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "skip",
    description: "<:dr_heart:817449378792472636> To skip the current music <:dr_heart:817449378792472636>",
    usage: "",
    aliases: ["s"]
  },

  run: async function(client, message, args) {
    const channel = message.member.voice.channel;
    if (!channel)
      return sendError(
        "I'm sorry but you need to be in a voice channel to play music!",
        message.channel
      );
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)
      return sendError(
        "There is nothing playing that I could skip for you.",
        message.channel
      );
    if (!serverQueue.connection) return;
    if (!serverQueue.connection.dispatcher) return;
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      let xd = new MessageEmbed()
        .setDescription(
          "<:dr_heart:817449378792472636> Skipped the music for you! <:dr_heart:817449378792472636"
        )
        .setColor("YELLOW")
        .setTitle("Music has been Skipped!");

      return message.channel.send(xd).catch(err => console.log(err));
    }

    try {
      serverQueue.connection.dispatcher.end();
    } catch (error) {
      serverQueue.voiceChannel.leave();
      message.client.queue.delete(message.guild.id);
      return sendError(
        `:notes: The player has stopped and the queue has been cleared.: ${error}`,
        message.channel
      );
    }
    message.react("<:dr_heart:817449378792472636>");
  }
};
