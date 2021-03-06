const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "loop",
    description: "<:dr_heart:817449378792472636> Toggle music loop <:dr_heart:817449378792472636>",
    usage: "loop",
    aliases: ["l"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
       if (serverQueue) {
            serverQueue.loop = !serverQueue.loop;
            return message.channel.send({
                embed: {
                    color: "GREEN",
                    description: `🔁  **|** <:dr_heart:817449378792472636>  **Loop is now \`${serverQueue.loop === true ? "enabled" : "disabled"}\`** <:dr_heart:817449378792472636>`
                }
            });
        };
    message.react("<:dr_heart:817449378792472636>")
    return sendError("There is nothing playing in this server.", message.channel);
  },
};
