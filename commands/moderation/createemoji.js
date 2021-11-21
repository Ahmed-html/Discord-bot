const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	const notice3 = new Discord.MessageEmbed()
		.setDescription(
			":x: **I don't have permission to create emojis! So not halal mode.**"
		)
		.setColor("RED");
	if (!message.guild.member(client.user).hasPermission("MANAGE_EMOJIS"))
		return message.channel
			.send(notice3)
			.then(msg => msg.delete({ timeout: 5000 }));
	try {
		const embed6 = new Discord.MessageEmbed()
			.setDescription(
				`:x: ${message.author.username}, Missing Permission! So not halal mode.`
			)
			.setColor("RED");
		if (!message.member.hasPermission("MANAGE_EMOJIS"))
			return message.channel.send(embed6).then(msg => msg.delete(5000));
		const emoji = message.attachments.array()[0] || args[0];

		if (emoji) {
			if (emoji.url) {
				if (args[0]) {
					message.guild.emojis
						.create(emoji.url, args[0])
						.then(emoji =>
							message.channel.send(`:white_check_mark: I've created the ${emoji.name} emoji!`)
						)
						.catch(err =>
							message.reply(`I couldn't create the emoji\n${err}, do something right in your life.`)
						);
				} else message.reply("You need to put the name for the emoji in, idiot.");
			} else if (args[1]) {
				message.guild.emojis
					.create(emoji, args[1])
					.then(emoji =>
						message.channel.send(`:white_check_mark: I've created the ${emoji.name} emoji!`)
					)
					.catch(err => message.reply(`I couldn't create the emoji\n${err}, do something right in your life.`));
			} else message.reply("You need to put the name for the emoji in, idiot");
		} else message.reply("You need to give the image for the emoji, idiot");
	} catch (err) {
		message.channel.send(`There was an error\n${err}, do something right in your life.`).catch();
	}
};

module.exports.help = {
	name: "createemoji",
	description: "Create emoji easily with commands",
	usage: "!createemoji <name> <attachments>",
	accessableby: "Manage Emojis",
	aliases: []
};
