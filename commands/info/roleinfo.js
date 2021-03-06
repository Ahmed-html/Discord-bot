const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	const missingargs = new Discord.MessageEmbed()
		.setDescription(`:x: Mention or type the name of role, idiot`)
		.setColor("RED");

	const missingrole = new Discord.MessageEmbed()
		.setDescription(`:x: Cannot find that role! So not halal mode`)
		.setColor("RED");

	const role = args.join(" ");
	const gRole =
		message.guild.roles.cache.get(role.replace(/[^0-9]/g, "")) ||
		message.guild.roles.cache.get(role) ||
		client.guilds.cache
			.get(message.guild.id)
			.roles.cache.find(val => val.name === role);

	if (!role) return message.channel.send(missingargs);
	if (!gRole) return message.channel.send(missingrole);

	const status = {
		false: "No",
		true: "Yes"
	};

	const roleemebed = new Discord.MessageEmbed()
		.setTitle(`Role Information: ${gRole.name}`)
		.setColor("#3498DB")
		.setDescription(
			`ID: ${gRole.id}\nMembers: ${gRole.members.size}\nColour: ${
				gRole.hexColor
			}\nMentionable: ${status[gRole.mentionable]}\nPosition: ${gRole.position}`
		);
	//	.addField("Hoisted", status[gRole.hoist], inline)
	//	.addField("Managed", status[gRole.managed], inline);

	message.channel.send(roleemebed);
};

module.exports.help = {
	name: "roleinfo",
	description: "This command is used for looking at role information.",
	usage: "!roleinfo <role id>",
	accessableby: "Member",
	aliases: []
};
