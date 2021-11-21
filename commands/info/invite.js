const fetch = require("node-fetch");
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	const embed = new Discord.MessageEmbed()
		.setAuthor(`Unfortunately, as of now we are a private bot`, client.user.displayAvatarURL())
		.setColor("#3498DB")
		.setDescription(
			`We are working on making the bot public, for now you will just have to wait`
		)
	message.channel.send(embed);
};

module.exports.help = {
	name: "invite",
	description: "This command is used for inviting the bot",
	usage: "!invite",
	accessableby: "Members",
	aliases: []
};