import { SlashCommandBuilder, ChannelType, ButtonBuilder, ButtonStyle, ActionRowBuilder, EmbedBuilder } from 'discord.js';

const data = SlashCommandBuilder()
  .setName('secretchannel')
  .setDescription('創建一個秘密的小房間');

const execute = async (interaction) => {
  const member = interaction.member;
  if (!member.voice.channel) 
}
