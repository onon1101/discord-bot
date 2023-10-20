const { SlashCommandBuilder } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
	.setName('ping')
	.setDescription('Replies with Pong!'),
	// .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	execute(interaction) {
		if (interaction.member.user.bot) return;
		interaction.reply({content: 'ping', ephermal: true});
		
	},
};