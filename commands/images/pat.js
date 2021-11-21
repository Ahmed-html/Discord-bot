const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	if (message.mentions.users.first().id === "718115170798534656")
		return message.reply("You can't pat him. He will explode on impact!");
	if (message.mentions.users.first().id === "866334724778885130")
		return message.reply("Try pat, me see what happens.");
	// eslint-disable-line no-unused-vars
	try {
		const member = message.mentions.members.first();

		require("request")(
			{ url: "https://nekos.life/api/pat", json: true },
			(req, res, json) => {
				if (member) {
					const embed = new Discord.MessageEmbed()
						.setTitle(`${message.author.username} pats ${member.user.username}, personaly i wouldn't have it `)
						.setColor("#3498DB")
						.setImage(json.url);

					message.channel.send(embed);
				} else message.reply("You need to mention the user to pat, idiot");
			}
		);
	} catch (err) {
		message.channel.send(`There was an error!\n${err}, do something right in your life`).catch();
	}
};

module.exports.help = {
	name: "pat",
	description: "This command is used for generating pat.",
	usage: "!pat <mention>",
	accessableby: "Members",
	aliases: []
};
