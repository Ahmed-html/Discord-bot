module.exports.run = async (client, message, args) => {
	try {
		if (!args[0])
			return message.reply("Idiot, you need to input the text to reverse!");

		const str = args.join(" ");
		const msg = await message.reply(str.split("").reverse().join(""));
	} catch (err) {
		message.channel.send(`Their was an error! I guess you have something in common with this error, your both unwanted.\n${err}`).catch();
	}
};

module.exports.help = {
	name: "reverse",
	description: "This command is used for reversing words.",
	usage: "!reverse",
	accessableby: "Member",
	aliases: []
};
