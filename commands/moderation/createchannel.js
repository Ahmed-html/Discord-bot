const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	const notice3 = new Discord.MessageEmbed()
		.setDescription(
			":x: **I don't have permission to manage channel, idiot.**"
		)
		.setColor("RED");
	if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) {
		return message.channel
			.send(notice3)
			.then(msg => msg.delete({ timeout: 5000 }));
	}
	try {
		const embed6 = new Discord.MessageEmbed()
			.setDescription(
				`:x: ${message.author.username}, Missing Permission! So not halal mode.`
			)
			.setColor("RED");
		if (!message.member.hasPermission("MANAGE_CHANNELS"))
			return message.channel.send(embed6).then(msg => msg.delete(5000));
		if (!args[1]) return message.reply("You need to input the channel type, idiot");
		if (!args[0]) return message.reply("You need to input the channel name, idiot");

		message.channel.send(":white_check_mark: I've created the channel!").then(() => {
			message.guild.channels.create(args[1], args[0], []).catch(err => {
				message.channel.send("There was an error, do something right in your life.");
			});
		});
	} catch (err) {
		message.channel.send(`There was an error\n${err}, do something right in ypur life.`).catch();
	}
};

module.exports.help = {
	name: "createchannel",
	description: "Create channel easily with commands",
	usage: "!createchannel <type: text/voice> <name>",
	accessableby: "Manage Channels",
	aliases: []
};
