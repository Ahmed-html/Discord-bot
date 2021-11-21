const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	if (message.mentions.users.first().id === "718115170798534656")
		return message.reply("You can't kiss him. He will explode on impact!");
	if (message.mentions.users.first().id === "866334724778885130")
		return message.reply("I did not consent, calling the cops rn.");
	try {
		const member = message.mentions.members.first();
		require("request")(
			{ url: "https://nekos.life/api/kiss", json: true },
			(req, res, json) => {
				if (member) {
					const embed = new Discord.MessageEmbed()
						.setTitle(
							`${message.author.username} kisses ${member.user.username}, things are getting spicy!`
						)
						.setColor("#3498DB")

						.setImage(json.url);

					message.channel.send(embed);
				} else message.reply("You need to mention the user to kiss, idiot.");
			}
		);
	} catch (err) {
		message.channel.send(`Their was an error!\n${err}, do something right in your life.`).catch();
	}
};

module.exports.help = {
	name: "kiss",
	description: "This command is used for kiss someone u love.",
	usage: "!kiss <mentions>",
	accessableby: "Member",
	aliases: []
};
