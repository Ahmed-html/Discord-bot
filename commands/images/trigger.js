const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports.run = async (client, message, args) => {
	const usernotfind = new Discord.MessageEmbed()
		.setDescription(`:x: User is not found! So not halal mode.`)
		.setColor("RED");

	const target = message.mentions.users.first();
	const attachment = message.attachments.array()[0];
	let imagetarget;
	try {
		imagetarget =
			target ||
			(attachment
				? attachment.url
				: args[0]
				? args[0].length == 18
					? message.guild.members.cache.get(args[0]).user.displayAvatarURL({
							dynamic: false,
							format: "png",
							size: 4096
					  })
					: message.guild.members.cache
							.find(
								r =>
									r.user.username.toLowerCase() ===
									args.join(" ").toLocaleLowerCase()
							)
							.user.displayAvatarURL({
								dynamic: false,
								format: "png",
								size: 4096
							})
				: message.author.displayAvatarURL({
						dynamic: false,
						format: "png",
						size: 4096
				  }));
	} catch (e) {
		return message.channel.send(usernotfind);
	}

	const image = await canvacord.Canvas.trigger(imagetarget);
	const rainbow = new Discord.MessageAttachment(image, "trigger.gif");
	return message.channel.send(rainbow);
};

module.exports.help = {
	name: "trigger",
	description: "This command is used for generating a trigger image",
	usage: "!trigger <user id>",
	accessableby: "Member",
	aliases: []
};
