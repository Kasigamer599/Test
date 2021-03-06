const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
    info: {
        name: "leave",
        aliases: ["leave","disonnect"],
        description: "<:dr_heart:817449378792472636> eave The Voice Channel! <:dr_heart:817449378792472636>",
        usage: "Leave",
    },

    run: async function (client, message, args) {
        let channel = message.member.voice.channel;
        if (!channel) return sendError("I'm sorry but you need to be in a voice channel!", message.channel);
        if (!message.guild.me.voice.channel) return sendError("I Am Not In Any Voice Channel!", message.channel);

        try {
            await message.guild.me.voice.channel.leave();
        } catch (error) {
            await message.guild.me.voice.kick(message.guild.me.id);
            return sendError("Trying To Leave The Voice Channel...", message.channel);
        }

        const Embed = new MessageEmbed()
            .setAuthor("<:dr_heart:817449378792472636> Left Voice Channel <:dr_heart:817449378792472636>")
            .setColor("GREEN")
            .setTitle("Success")
            .setDescription("🎶 Left The Voice Channel.")
             message.react("<:dr_heart:817449378792472636>")
            .setTimestamp();

        return message.channel.send(Embed).catch(() => message.channel.send("<:dr_heart:817449378792472636> Left The Voice Channel <:dr_heart:817449378792472636>"));
    },
};